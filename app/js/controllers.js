
angular.module('controllers', [])

    .controller('homeCtrl', ['$scope', '$stateParams','$http','$window','localStorageFactory',
        function ($scope, $stateParams, $http, $window,localStorageFactory) {

            $scope.item = {};

            // static duration
            $scope.durations = [
                {'title': '1-3', 'value': '1-3'},
                {'title': '4-7', 'value': '7-9'}
            ];

            $scope.item.duration = $scope.durations[0].value;

       /*     $scope.medicines = [
                {'title':'napa',     'value':'napa'},
                {'title':'parasitamol','value':'parasitamol'},
                {'title':'provair 10' ,'value':'provair 10'},
            ];
            // default value
            $scope.item.medicine = $scope.medicines[0].value;
*/
            /**
             * Function for adding items to item list
             * @param item
             */
            $scope.addItem = function (item, index) {

            /*    $http({
                    method: 'POST',
                    url: '/api/details',
                    data: {
                        'tableName': tableName,
                        'action': action,
                        'data': item
                    }
                }).then(function successCallback(response) {
                  console.log(response);
                }, function errorCallback(response) {
                    console.log(response)
                });*/








                console.log(item);
                if (typeof index == 'undefined') {
                    localStorageFactory.insert(item);
                }
            };

            localStorageFactory.get().then(function (data) {
                $scope.itemList = data;
                console.log($scope.itemList);
            })


            /**
             * edit item
             * @param index
             */
            $scope.editItem = function (index) {
                $scope.selectedItemIndex = index;
                $scope.item = $scope.itemList[index];
            };

            /**
             * delete item
             * @param index
             */
            $scope.deleteItem = function (index) {
                localStorageFactory.delete(index)
            };



        }]);