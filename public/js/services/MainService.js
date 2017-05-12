angular.module('MainService', []).factory('Main', ['$q', '$http', function($q, $http) {

	var getWhether = function(lat, lng) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/api/whether/'+lat+'/'+lng,
            }).then(function successCallback(response) {
                //console.log(response.data);
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                console.log(response);
        });
        return deferred.promise;
    };

    var getWhetherForecast = function(lat, lng) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/api/whetherForecast/'+lat+'/'+lng,
            }).then(function successCallback(response) {
                //console.log(response.data);
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                console.log(response);
        });
        return deferred.promise;
    };

    return {
        getWhether: getWhether,
        getWhetherForecast: getWhetherForecast
    };

}]);