var weather = require('openweather-apis');

weather.setLang('en');
weather.setUnits('metric'); // 'metric'  'internal'  'imperial' 
weather.setAPPID('df427047bf465451cc3bfba3707ac970'); 

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests


	app.get('/', function(req, res) {
    	res.json({ message: 'hooray! welcome to our api!' });   
	});

	app.route('/whether/:lat/:lng')

    // get the whether with co-ordinates
    .get(function(req, res) {
		weather.setCoordinate(req.params.lat, req.params.lng);
		console.log("req.params.lat: "+req.params.lat);
		console.log("req.params.lng: "+req.params.lng);
		// weather.getWeatherForecastForDays(3, function(err, obj){
		// 	console.log(obj);
		// });
		if(req.params.lat == 'undefined' || req.params.lng == 'undefined') {
			console.log("Undefined, Skipping processing, Returning Undefined");
			res.send("Invalid Request");
		} else {
			console.log("Lat/Long set, processing...");
			weather.getAllWeather(function(err, JSONObj){
				if(err) {
					console.log(err);
					res.send("Error in Request");
				} else {
					res.send(JSONObj);
				}
			});
		}
    });

	app.route('/whetherForecast/:lat/:lng')

    // get the whether with co-ordinates
    .get(function(req, res) {
		weather.setCoordinate(req.params.lat, req.params.lng);
		console.log("req.params.lat: "+req.params.lat);
		console.log("req.params.lng: "+req.params.lng);
		if(req.params.lat == 'undefined' || req.params.lng == 'undefined') {
			console.log("Undefined, Skipping processing, Returning Undefined");
			res.send("Invalid Request");
		} else {
			console.log("Lat/Long set, processing...");
			weather.getWeatherForecastForDays(5, function(err, obj){
				if(err) {
					console.log(err);
					res.send("Error in Request");
				} else {
					res.send(obj);
				}
			});
		}
    })

};