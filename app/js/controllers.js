angular.module('controllers', [])

    .controller('homeCtrl', ['$scope', '$stateParams', '$http', '$window',
        function ($scope, $stateParams, $http, $window) {

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

                $http.post('/api/db/prescription', item).then(function (success) {
                    console.log(success);
                }, function (error) {
                    console.log(error);
                });

                // console.log(item);
                // if (typeof index == 'undefined') {
                //     localStorageFactory.insert(item);
                // }
            };


                $http.get('/api/db/prescription').then(function (prescriptions) {
                    var data = prescriptions.data;
                    $scope.prescriptions = data;
                    console.log( data);

                    // if i want all data for each column
                    // for(var i in $scope.prescriptions){
                    //     var item = $scope.prescriptions[i];
                    //     console.log(item.age);
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
                console.log("data from controller ", data);
                $http.put('/api/db/prescription', data).then(function (success) {
                    console.log("success" + success);
                }, function (error) {
                    console.log(error);
                });
            };
            /**
             * delete item
             * @param index
             */
            $scope.deleteItem = function (data) {
                console.log(data);
                $http.delete('/api/db/prescription'+ data.id).then(function (success) {
                    console.log("delete request success ",success);
                },function (error) {
                    console.log("Delete request failure ",error);
                })
            };


        }])
    .controller('feelingsCtrl',['$scope',function ($scope) {

    }])
    .controller('problemsCtrl',['$scope',function ($scope) {

    }]);