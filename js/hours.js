var dininghours = 
  [
    {name: 'Danforth',  menu: true, days: {
		
    		'Monday-Thursday': {times:
			[ 
	    		{what: 'dinner'   , open: '5pm' , close: '9pm'},
	    		{what: 'lunch'    , open: '11am', close: '1:30pm'}
	    	]},
	    	'Friday': {times: 
			[ 
				{what: 'lunch'    , open: '11am', close: '1:30pm'},
	    		{what: 'select stations', open: '1:30pm', close: '5pm'},
	    		{what: 'dinner'         , open: '5pm'   , close: '9pm'}
	    	]},		
	    	'Saturday': {times:
			[
	    		{what: 'continental breakfast', open: '8am'    , close: '10:30am'},
	    		{what: 'brunch'               , open: '10:30am', close: '2pm'},
	    		{what: 'select stations'      , open: '2pm'    , close: '5pm'},
	    		{what: 'dinner'               , open: '5pm'    , close: '9pm'},
	    	]},	
	    	'Sunday': {times: 
			[
	    		{what: 'continental breakfast', open: '8am'    , close: '10:30am'},
	    		{what: 'brunch'               , open: '10:30am', close: '2pm'},
	    		{what: 'select stations'      , open: '2pm'    , close: '5pm'},
	    		{what: 'dinner'               , open: '5pm'    , close: '9pm'},
	    	]}
    
	  	
    	
	}},

	
    {name: 'Hillside Market', days: {
		
    		'Monday-Thursday' : {times:
			[ 
	    		{what: 'groceries', open: '7:30am', close: '3am'}
	    	]},
	    	'Friday': {times: 
			[ 
				{what: 'groceries', open: '7:30am', close: '3am'}
	    	]},		
	    	'Saturday': {times:
			[
	    		{what: 'groceries', open: '12pm', close: '3am'}
	    	]},	
	    	'Sunday': {times:
			[
	    		{what: 'groceries', open: '12pm', close: '3am'}
	    	]}	
    
	    	
    	
	}},

	 {name: 'Douglass', menu:true, days: {
		
    		'Monday-Thursday' : {times:
			[ 
	    		{what: 'breakfast'      , open: '7:30am', close: '11am'},
	    		{what: 'lunch'          , open: '11am'  , close: '2:30pm'},
	    		{what: 'select stations', open: '2:30pm', close: '5pm'},
	    		{what: 'dinner'         , open: '5pm'   , close: '8pm'}
	    	]},
	    	'Friday': {times: 
			[ 
				{what: 'breakfast', open: '7:30am', close: '11am'},
				{what: 'lunch', open: '11am', close: '2pm'}
	    	]},		
	    	'Saturday': {times:
			[
	    		{what: 'closed', open: null, close: null}
	    	]},	
	    	'Sunday': {times:
			[
	    		{what: 'closed', open: null, close: null}
	    	]}	
    
	    	
    	
	}},

	{name: 'The Pit', menu: true, days: {
		
    		'Monday-Thursday' : {times:
			[ 
	    		{what: 'the usual', open: '8:30am', close: '11:59pm'}
	    	]},
	    	'Friday': {times: 
			[ 
				{what: 'the usual', open: '8:30am', close: '11:59pm'}
	    	]},		
	    	'Saturday': {times:
			[
	    		{what: 'the usual', open: '11am', close: '11:59pm'}
	    	]},	
	    	'Sunday': {times:
			[
	    		{what: 'the usual', open: '11am', close: '11:59pm'}
	    	]}	
   	}},

   		{name: 'Blimpie', days: {
		
    		'Monday-Thursday' : {times:
			[ 
	    		{what: 'subs', open: '11am', close: '10pm'}
	    	]},
	    	'Friday': {times: 
			[ 
				{what: 'subs', open: '11am', close: '10pm'}
	    	]},		
	    	'Saturday': {times:
			[
	    		{what: 'subs', open: '11am', close: '10pm'}
	    	]},	
	    	'Sunday': {times:
			[
	    		{what: 'subs', open: '11am', close: '10pm'}
	    	]}	
   		}},

   		{name: 'Starbucks', days: {
		
    		'Monday-Thursday' : {times:
			[ 
	    		{what: 'coffee', open: '7:30am', close: '11:59pm'}
	    	]},
	    	'Friday': {times: 
			[ 
				{what: 'coffee', open: '7:30am', close: '1am'}
	    	]},		
	    	'Saturday': {times:
			[
	    		{what: 'coffee', open: '10am', close: '1am'}
	    	]},	
	    	'Sunday': {times:
			[
	    		{what: 'coffee', open: '10am', close: '11:59pm'}
	    	]}	
   		}},

   		{name: 'The Mel Express', days: {
		
    		'Monday-Thursday' : {times:
			[ 
	    		{what: 'lunch', open: '11am', close: '2pm'}
	    	]},
	    	'Friday': {times: 
			[ 
				{what: 'lunch', open: '11am', close: '2pm'}
	    	]},		
	    	'Saturday': {times:
			[
	    		{what: 'closed', open: null, close: null}
	    	]},	
	    	'Sunday': {times:
			[
	    		{what: 'closed', open: null, close: null}
	    	]}	
   		}},

   		

   		{name: 'Grab & Go', days: {
		
    		'Monday-Thursday' : {times:
			[ 
	    		{what: 'bags of food', open: '10:30am', close: '2pm'}
	    	]},
	    	'Friday': {times: 
			[ 
				{what: 'bags of food', open: '10:30am', close: '2pm'}
	    	]},		
	    	'Saturday': {times:
			[
	    		{what: 'closed', open: null, close: null}
	    	]},	
	    	'Sunday': {times:
			[
	    		{what: 'closed', open: null, close: null}
	    	]}	
   		}},

   		{name: 'Faculty Club', days: {
		
    		'Monday-Thursday' : {times:
			[ 
	    		{what: 'lunch', open: '11am', close: '2pm'}
	    	]},
	    	'Friday': {times: 
			[ 
				{what: 'lunch', open: '11am', close: '2pm'}
	    	]},		
	    	'Saturday': {times:
			[
	    		{what: 'closed', open: null, close: null}
	    	]},	
	    	'Sunday': {times:
			[
	    		{what: 'closed', open: null, close: null}
	    	]}	
   		}},

   		{name: 'Pura Vida', days: {
		
    		'Monday-Thursday' : {times:
			[ 
	    		{what: 'lunch', open: '7:30am', close: '6:30pm'}
	    	]},
	    	'Friday': {times: 
			[ 
				{what: 'lunch', open: '11am', close: '2pm'}
	    	]},		
	    	'Saturday': {times:
			[
	    		{what: 'closed', open: null, close: null}
	    	]},	
	    	'Sunday': {times:
			[
	    		{what: 'closed', open: null, close: null}
	    	]}	
   		}},

   		{name: 'Connections', days: {
		
    		'Monday-Thursday' : {times:
			[ 
	    		{what: 'café', open: '7am', close: '10pm'}
	    	]},
	    	'Friday': {times: 
			[ 
				{what: 'café', open: '7am', close: '5pm'}
	    	]},		
	    	'Saturday': {times:
			[
	    		{what: 'closed', open: null, close: null}
	    	]},	
	    	'Sunday': {times:
			[
	    		{what: 'café', open: '2pm', close: '10pm'}
	    	]}	
   		}},

   		{name: 'Southside Market', days: {
		
    		'Monday-Thursday' : {times:
			[ 
	    		{what: 'groceries', open: '5pm', close: '1am'}
	    	]},
	    	'Friday': {times: 
			[ 
				{what: 'closed', open: null, close: null}
	    	]},		
	    	'Saturday': {times:
			[
	    		{what: 'groceries', open: '12pm', close: '5pm'}
	    	]},	
	    	'Sunday': {times:
			[
	    		{what: 'groceries', open: '5pm', close: '1am'}
	    	]}	
   		}},

];
