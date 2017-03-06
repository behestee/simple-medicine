/**
 * Created by Hussain on 2/9/2017.
 */
angular.module('services', [])

    .factory('DataFactory', ['$q','$http', function($q, $http) {
        var db = [];

        return {
            postData:function (tableName, action, data) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                // Simple GET request example:
                $http({
                    method: 'POST',
                    url: '/api/db',
                    data: {
                        'tableName':tableName,
                        'action': action,
                        'data':data
                    }
                }).then(function successCallback(response) {
                    deferred.resolve(response.data);
                }, function errorCallback(response) {
                    deferred.reject(response);
                });

                return promise;
            },
            getData:function () {
                var deferred = $q.defer();
                var promise = deferred.promise;

                // Simple GET request example:
                $http({
                    method: 'GET',
                    url: '/api/db'
                }).then(function successCallback(response) {
                    deferred.resolve(response.data);
                }, function errorCallback(response) {
                    deferred.reject(response);
                });

                return promise;
            },
        };

    }])

    .factory('localStorageFactory',['$q',function ($q) {
    var STORAGE_ID = "Data_Item";
    var db = {
        items: [],

        getFromLocalStorage: function () {
            this.items = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
            return this.items;
        },

        saveToLocalStorage: function (itemArr) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(itemArr));
        },

        delete: function (item) {
            var deferred = $q.defer();
            db.items.splice(db.items.indexOf(item), 1);
            db.saveToLocalStorage(db.items);
            deferred.resolve(db.items);
            return deferred.promise;
        },

        get: function () {
            var deferred = $q.defer();
            db.getFromLocalStorage();
            deferred.resolve(db.items);

            return deferred.promise;
        },

        insert: function (item) {
            var deferred = $q.defer();
            item.key = Date.now();

            db.items.push(item);
            db.saveToLocalStorage(db.items);
            deferred.resolve(db.items);

            return deferred.promise;
        },

        update: function (item) {
            var deferred = $q.defer();

            var index = db.getIndexById(item.key);
            db.items[index] = item;

            console.log(item);
            console.log(index);
            console.log(db.items[index]);
            db.saveToLocalStorage(db.items);
            deferred.resolve(db.items);
            return deferred.promise;
        },
        getIndexById: function (id) {
            var index;

            var items = db.getFromLocalStorage();
            angular.forEach(items, function (item, key) {
                if (item.key == id) {
                    index = key;
                }
            });
            return index;
        },


    };
    return db;



}])