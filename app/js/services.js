/**
 * Created by mirajehossain on 3/6/2017.
 */
angular.module('services', [])

    .factory('DataFactory', ['$q', '$http', function ($q, $http) {

        var ApiData = {
            getPrescriptionData: function () {
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.get('/api/db/prescription').then(function (response) {
                    deferred.resolve(response.data);
                }, function (response) {
                    deferred.reject(response.data);

                });
                return promise;
            },
            postPrescriptionData: function (prescription) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.post('/api/db/prescription', prescription).then(function (response) {
                    deferred.resolve(response);
                }, function (response) {
                    deferred.reject(response);
                });
                return promise;
            },
            putPrescriptionData: function (prescription) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.put('/api/db/prescription', prescription).then(function (response) {
                    deferred.resolve(response);
                    console.log("form service ", response)
                }, function (response) {
                    deferred.reject(response);
                });
                return promise;
            },
            deletePrescriptionData: function (prescription) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.delete('/api/db/prescription/' + prescription.id).then(function (response) {
                    deferred.resolve(response);
                }, function (response) {
                    deferred.reject(response);
                });
                return promise;
            },


            /**
             * Feeling API crud
             */

            getFeelingsData: function () {
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.get('/api/db/feelings').then(function (response) {
                    deferred.resolve(response.data);
                }, function (response) {
                    deferred.reject(response.data);

                });
                return promise;
            },
            postFeelingsData: function (feelings) {
                console.log(feelings)
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.post('/api/db/feelings', feelings).then(function (response) {
                    deferred.resolve(response);
                    console.log("add new feelings", response)
                }, function (response) {
                    deferred.reject(response);
                    console.log("can't add feelings", response)
                });
                return promise;
            },
            putFeelingsData: function (feelings) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.put('/api/db/feelings', feelings).then(function (response) {
                    deferred.resolve(response);
                }, function (response) {
                    deferred.reject(response);
                });
                return promise;
            },
            deleteFeelingsData: function (feelings) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.delete('/api/db/feelings/' + feelings.id).then(function (response) {
                    deferred.resolve(response);
                }, function (response) {
                    deferred.reject(response);
                });
                return promise;
            },


            /**
             * Problem API
             */

            getProblemData: function () {
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.get('/api/db/problems').then(function (response) {
                    deferred.resolve(response.data);
                }, function (response) {
                    deferred.reject(response.data);

                });
                return promise;
            },
            postProblemsData: function (problems) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.post('/api/db/problems', problems).then(function (response) {
                    deferred.resolve(response);
                }, function (response) {
                    deferred.reject(response);
                });
                return promise;
            },
            putProblemsData: function (problems) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.put('/api/db/problems', problems).then(function (response) {
                    deferred.resolve(response);
                    console.log("form service ", response)
                }, function (response) {
                    deferred.reject(response);
                });
                return promise;
            },
            deleteProblemsData: function (feelings) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http.delete('/api/db/problems/' + feelings.id).then(function (response) {
                    deferred.resolve(response);
                }, function (response) {
                    deferred.reject(response);
                });
                return promise;
            }


        };
        return ApiData;

    }])