function getTimeAndDay()
{

	var currentHour = moment().hour();
	var day = moment().format("dddd");
	var timeOfDay;
	if (currentHour < 5) {
		timeOfDay = " a very early " + day + " morning";
	}
	else if (currentHour < 7) {
		timeOfDay = " an early " +  day + " morning";
	}
	else if (currentHour < 12) {
		timeOfDay =  " a "+day + " morning";
	}
	else if (currentHour < 18) {
		timeOfDay =  " a "+day + " afternoon";
	}
	else {
		timeOfDay = " a "+day + " night";
	}

	return moment().format("h:mm") + " on " + timeOfDay;
}
function Location(name, close, simpleMenu)
{
	this.name = name;
	this.close = close;
	this.simpleMenu = simpleMenu;
	this.equals = function(other) {
     	return other.name == this.name;
  };
}
function contains(arr, obj) {
    var i = arr.length;
    while (i--) {
       if (arr[i].equals(obj)) {
           return true;
       }
    }
    return false;
}

function updateLocations()
{
	var openLocations = [];
	var today = moment().format("dddd");
	var inputDay;
	if (today == "Monday" || today == "Tuesday" || today == "Wednesday" || today == "Thursday")
	{
		inputDay = "Monday-Thursday";
	}
	else
	{
		inputDay = today;
	}
	
	for (var loc = 0; loc < dininghours.length; loc++)
	{
		//console.log(dininghours[loc].name)
		//We need to check only the current day
		
		
		for (var time = 0; time < dininghours[loc].days[inputDay].times.length; time++) 
		{
		if (dininghours[loc].days[inputDay].times[time].what != "closed"){
			
			var theTime = dininghours[loc].days[inputDay].times[time];
			var close = moment(theTime.close, "hhmma");
			var open = moment(theTime.open, "hhmma");
			console.log("timeslot: "+time+"location:"+dininghours[loc].name+" and thing:" + dininghours[loc].days[inputDay].times[time].what)
			if (open.hour() > close.hour())
			{
				close.add('h', 24);
			}
			var range = moment().range(open, close);
			//console.log("     open: "+open+"  close: "+close);
			
			if (range.contains(moment()))
			{
                                if (theTime.close == "11:59pm") {theTime.close = "midnight";}
				//console.log(dininghours[loc].days[day])
				var name = dininghours[loc].name;
				var goodloc = new Location(name, theTime.close, theTime.what);
				if (!contains(openLocations, goodloc))
				{
					openLocations.push(goodloc);
					//console.log(loc)
				}
			}

			if (openLocations.length == 0)
			{
				openLocations.push(new Location("Nothing", "you die of hunger o' clock", "air"));
			}
			}
		
		}
			

			
		
	}
	
	console.log(openLocations)
	return openLocations;
}

function locationUpdater($scope, $timeout)
{
	$scope.timeAndDay = getTimeAndDay();
	 $scope.locations = updateLocations();
	// 	{name:"Danforth", close:"12pm", timeleft:"2 hours", simpleMenu:"brunch" },
	// 	{name:"Hillside POD", close:"1pm", timeleft:"1 hours", simpleMenu:"groceries" },
	// 	{name:"The Pit", close:"6pm", timeleft:"1 minute", simpleMenu:"the usual" }
	// ];
	
	
		
	var timer = function(){
		$scope.timeAndDay = getTimeAndDay();
		$scope.locations = updateLocations();
		$timeout(timer, 500);
	} 
	
	timer();

}

var urHungryApp = angular.module('urHungryApp', []);
urHungryApp.controller('locationUpdater', locationUpdater);