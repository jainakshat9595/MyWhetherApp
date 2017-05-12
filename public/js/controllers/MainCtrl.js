angular.module('MainCtrl', []).controller('MainController', function($scope, Main, NgMap) {

	$scope.ip = {
      city: {}
    };

	$scope.daysOfWeek = [
		"Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"
	]

	$scope.forecast = [
	]

	NgMap.getMap().then(function(map) {
    	// console.log(map.getCenter());
    	// console.log('markers', map.markers);
    	// console.log('shapes', map.shapes);
  	});

	$scope.$watch('ip.city', function () {
		if($scope.ip.city.lat && $scope.ip.city.lng) {
			// console.log("$scope.ip.city.lat: "+$scope.ip.city.lat);
			// console.log("$scope.ip.city.lng: "+$scope.ip.city.lng);
			Main.getWhether($scope.ip.city.lat, $scope.ip.city.lng).then(function(data) {
				//console.log(data);
				$scope.ip.city.current = data;
			});
			Main.getWhetherForecast($scope.ip.city.lat, $scope.ip.city.lng).then(function(data) {
				//console.log(data);
				$scope.ip.city.forecast = data;
				$scope.ip.city.forecast.list.forEach(function(element) {
					var timestamp = element.dt; // UNIX timestamp in seconds
					var xx = new Date();
					xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
					$scope.forecast.push($scope.daysOfWeek[xx.getDay()]);
				}, this);
				
			});
		}
	});

});