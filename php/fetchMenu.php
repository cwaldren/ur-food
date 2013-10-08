<?php
require 'simple_html_dom.php';


function getLocationID($location)
{
	$location = strtolower($location);
	switch ($location)
	{
		case "danforth":
			$id = 143;
			break;
		case "douglass":
			$id = 688;
			break;
		case "the pit":
			$id = 689;
			break;
		default: 
			$id = 143;
			break;
	}

	return $id;
}



function getMenuItems($location)
{
	$location = getLocationID($location);

	$html = new simple_html_dom();
	$html->load_file('http://www.campusdish.com/en-US/CSNE/ROCHESTER/Home.htm?LocationID='.$location);


	foreach ($html->find('#menu1 tbody tr td a[class="item1"]') as $entryTitle)
	{
		$menuEntries;
		$text = strtolower($entryTitle->plaintext);
		$formatted = '';
		preg_match('/[\w\s\/]+/', $text, $formatted);
		
		$submenu = '';
		$entryContent = $entryTitle->next_sibling();
		foreach ($entryContent->find('a') as $item)
		{
			$text = strtolower($item->plaintext);
			$submenu[] = $text;
		}

		$menuEntries[] = array("name"=>trim($formatted[0]), "submenu"=>$submenu);
		
	}

	echo json_encode($menuEntries);



	$html->clear();

}

if (isset($_POST['location']))
{
	getMenuItems(strip_tags($_POST['location']));
}

?>