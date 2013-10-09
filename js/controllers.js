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
		timeOfDay =  " a " + day + " morning";
	}
	else if (currentHour < 18) {
		timeOfDay =  " a " + day + " afternoon";
	}
	else {
		timeOfDay = " a " + day + " night";
	}

	return moment().format("h:mm") + " on " + timeOfDay;
}

function Location(name, close, simpleMenu, liveMenu)
{
	this.name = name;
	this.close = close;
	this.simpleMenu = simpleMenu;
	this.liveMenu = liveMenu;
	this.showMenu = false;
}


function updateLocations()
{
	var newOpenLocations = [];
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
		
		for (var time = 0; time < dininghours[loc].days[inputDay].times.length; time++) 
		{
			if (dininghours[loc].days[inputDay].times[time].what != "closed")
			{
				var theTime = dininghours[loc].days[inputDay].times[time];
				var close = moment(theTime.close, "hhmma");
				var open = moment(theTime.open, "hhmma");
			

				if (open.hour() > close.hour())
				{
					if (moment().hour() < open.hour())
					{
						open.add('d', -1);
					}
					else
					{
						close.add('d', 1);
					}
				}
					//console.log(dininghours[loc].name+" open: "+open.toString()+" close: "+close.toString())
				var range = moment().range(open, close);

				if (range.contains(moment()))
				{
					if (theTime.close == "11:59pm") {theTime.close = "midnight";}
					var liveMenu = dininghours[loc].menu;
					var name = dininghours[loc].name;
					var goodloc = new Location(name, theTime.close, theTime.what, liveMenu);
					if (!_.contains(newOpenLocations, goodloc))
					{
						newOpenLocations.push(goodloc);
					}
				}

			}
		
		}	

	}
	
	if (newOpenLocations.length === 0)
	{
		newOpenLocations.push(new Location("Nothing", "you die of hunger o' clock", "serving air", true));
	}
	return newOpenLocations;
}



var urHungryApp = angular.module('urHungryApp', []);

urHungryApp.factory('fetchMenuService', ['$http', function($http){
	return {
		fetchMenu: function(name) {
			return $http.get(
				'http://casey.im/php/fetchMenu.php', {
					params: {location: name}
				})
				.then(function(result){
					return result.data;
			})
		}
	}
}]);


urHungryApp.controller('LocationUpdaterController', 
	['$scope', '$timeout', 'fetchMenuService', function($scope, $timeout, fetchMenuService) {
		
		var updateClock = function()
		{
			$scope.timeAndDay = getTimeAndDay();
			$timeout(updateClock, 1000);
		}
		updateClock();

		var updateOpenLocations = function()
		{
			$scope.locations = updateLocations();
			$timeout(updateOpenLocations, 1000*60);
		}
		updateOpenLocations();
//var test = [{"name":"bistro home zone","submenu":["sauteed zucchini & yellow squash","mashed potatoes","rotisserie-style chicken"]},{"name":"deli\/change","submenu":["grilled cheese sandwich"]},{"name":"dessert","submenu":["caramel apple waffle ","chocolate chip cookie","oatmeal raisin cookie"]},{"name":"hibachi grill","submenu":["omelet station"]},{"name":"produce market","submenu":["salad bar "]},{"name":"saute","submenu":["chicken rice noodle salad "]},{"name":"soup","submenu":["pork and white bean chili ","sweet tomato soup","lentil vegetable soup"]},{"name":"vegan","submenu":["asian sesame gemelli ","gardenburger"]}];
		for (var i = 0; i < $scope.locations.length; i++)
		{

			if ($scope.locations[i].liveMenu)
			{
				var x = i;
				fetchMenuService.fetchMenu($scope.locations[i].name).then(function(data){
					console.log($scope.locations[x])
					$scope.locations[x].menu =data;
				})

				
			}
		}



}]);