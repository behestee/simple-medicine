angular.module('controllers', [])

    .controller('homeCtrl', ['$scope', '$stateParams', '$http', '$window', 'localStorageFactory',
        function ($scope, $stateParams, $http, $window, localStorageFactory) {

            $scope.item = {};

            // static duration
            $scope.age = [
                {'title': '1-5', 'value': '1-5'},
                {'title': '6-12', 'value': '6-12'},
                {'title': '13-20', 'value': '13-20'},
                {'title': '20-30', 'value': '20-30'}
            ];

            $scope.item.age = $scope.age[0].value;

            /**
             * Function for adding items to item list
             * @param item
             */
            $scope.addItem = function (item) {

                $http.post('/api/db', item).then(function (success) {
                    console.log(success);
                }, function (error) {
                    console.log(error);
                });

                // console.log(item);
                // if (typeof index == 'undefined') {
                //     localStorageFactory.insert(item);
                // }
            };

                localStorageFactory.get().then(function (data) {
                    $scope.itemList = data;
                    console.log($scope.itemList);
                });

                $http.get('/api/db').then(function (prescriptions) {
                    var data = prescriptions.data;
                    console.log( data);
                    // for (var i in data){
                    //  $scope.prescriptions = data[i];
                    //  console.log($scope.prescriptions);
                    // }
                });

            /**
             * edit item
             * @param index
             */
            $scope.editItem = function (index) {
                $scope.selectedItemIndex = index;
                $scope.item = $scope.prescriptions[index];
            };

            $scope.editPrescription = function (data) {
                alert("test")
                console.log("data from controller ", data);
                $http.put('/api/db/', data).then(function (success) {
                    console.log("success" + success);
                }, function (error) {
                    console.log("error occured " + error);
                });
            };


            /**
             * delete item
             * @param index
             */
            $scope.deleteItem = function (index) {
                localStorageFactory.delete(index)
            };


        }]);