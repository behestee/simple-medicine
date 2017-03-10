/**
 * Created by Hussain on 2/9/2017.
 */
angular.module('services', [])

    .factory('DataFactory', ['$q','$http', function($q, $http) {

        var ApiData = {
            getData : function (tableName) {
                console.log("table name form service  ", tableName);
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.get('/api/db?tableName='+tableName).then(function (success) {
                    console.log(success);
                },function (error) {
                    console.log(error.data);
                });
            return promise;
            }
        };
        return ApiData;

    }])