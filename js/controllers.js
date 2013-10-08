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
					console.log(dininghours[loc].name+" open: "+open.toString()+" close: "+close.toString())
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

urHungryApp.controller('LocationUpdaterController', 
	['$scope', '$timeout', function($scope, $timeout) {
		
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
}]);