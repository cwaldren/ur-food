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
		var notmuch = [{"name":"air zone","submenu":["sauteed nitrogen & yellow stir-fried oxygen","mashed carbon dioxide","rotisserie-style helium"]},{"name":"deli","submenu":["miniscule grilled atoms"]},{"name":"dessert","submenu":["caramel apple bacterium","chocolate chip cookie crumb"]}];
		newOpenLocations.push(new Location("Nothing", "you die of hunger o' clock", "serving air", true, notmuch));
		//add menu for air
	}
	return newOpenLocations;
}



var urHungryApp = angular.module('urHungryApp', []);

urHungryApp.factory('fetchMenuService', ['$http', function($http){
	return {
		fetchMenu: function(name) {
			return $http.get(
				MENU_FETCH_URL, {
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
			//mad code duplication I know
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
			$timeout(updateOpenLocations, 1000*60);
		}
		updateOpenLocations();
		
		

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