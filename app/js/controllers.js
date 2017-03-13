angular.module('controllers', [])

    .controller('homeCtrl', ['$scope', '$stateParams', '$http', 'DataFactory',
        function ($scope, $stateParams, $http, DataFactory) {

            $scope.item = {};
            // static age duration for taken medicine
            $scope.age = [
                {'title': '1-5', 'value': '1-5'},
                {'title': '6-12', 'value': '6-12'},
                {'title': '13-20', 'value': '13-20'},
                {'title': '20-30', 'value': '20-30'},
                {'title': '31-50', 'value': '31-50'}
            ];
            console.log($scope.age)
            $scope.item.age = $scope.age[0].value; // default age

            /**
             * Get feelings data form Feelings API
             * show feelings dropdown for Prescription
             */
            DataFactory.getFeelingsData().then(function (feelings) {
                $scope.feelings = feelings;
                console.log(feelings[0].feeling)

            });


            /**
             * Get problems data form Problems API
             * show problems dropdown for Prescription
             */
            DataFactory.getProblemData().then(function (problems) {
                console.log(problems)
                $scope.problems = problems;
            });


            /**
             * Function for adding items to API
             * @param item
             */
            $scope.addPrescription = function (item) {
                DataFactory.postPrescriptionData(item).then(function (success) {
                    console.log(success);
                    $scope.item.medicine = "";
                    $scope.item.description = "";
                    $scope.loadPrescritions();
                });
            };

            /**
             * get Prescriptions form API
             */
            $scope.loadPrescritions = function () {
                DataFactory.getPrescriptionData().then(function (prescription) {
                    console.log(prescription)
                    $scope.prescriptions = prescription;
                });
            };
            $scope.loadPrescritions();
            /**
             * edit item
             * @param index
             */
            $scope.editItem = function (index) {
                $scope.selectedItemIndex = index;
                $scope.item = $scope.prescriptions[index];
            };

            /**
             * edit prescription
             * @param data is a object of each prescription is select
             */
            $scope.editPrescription = function (data) {
                DataFactory.putPrescriptionData(data).then(function (response) {
                    console.log("update req success ", response);
                }, function (response) {
                    console.log("update req failed ", response.data);
                });
                $scope.loadPrescritions();
            };


            /**
             * delete item
             * @param data
             */
            $scope.deletePrescription = function (data) {
                DataFactory.deletePrescriptionData(data).then(function (response) {
                    console.log("delete success ", response);
                }, function (response) {
                    console.log("delete failed ", response.data);
                });
                $scope.loadPrescritions();
            };


        }])
    .controller('feelingsCtrl', ['$scope', '$stateParams', '$http', 'DataFactory',
        function ($scope, $stateParams, $http, DataFactory) {


            /**
             * Function for adding items to API
             * @param feelings
             */
            $scope.addFeeling = function (feelings) {
                DataFactory.postFeelingsData(feelings).then(function (success) {
                    console.log("successful   add request to db", success);
                    $scope.item.feeling = "";
                }, function (error) {
                    console.log("error", error)
                });
                $scope.loadFeelings();
            };
            /**
             * get Feelings data form API
             */
            $scope.loadFeelings = function () {
                DataFactory.getFeelingsData().then(function (feelings) {
                    console.log(feelings);
                    $scope.feelings = feelings;
                });
            };
            $scope.loadFeelings();

            /**
             * edit item
             * @param index
             */
            $scope.editItem = function (index) {
                $scope.selectedItemIndex = index;
                $scope.item = $scope.feelings[index];
            };

            /**
             * edit feelings
             * @param data
             */
            $scope.editFeeling = function (data) {
                DataFactory.putFeelingsData(data).then(function (success) {
                    console.log("successfully update request send to db ", success);
                }, function (error) {
                    console.log("can't send update request to db ", error);
                });
                $scope.loadFeelings();
            };


            /**
             * delete feelings
             * @param data
             */
            $scope.deleteFeeling = function (data) {
                DataFactory.deleteFeelingsData(data).then(function (response) {
                    console.log("delete req success ", response);
                }, function (response) {
                    console.log("delete req failed ", response.data);
                })
                $scope.loadFeelings();
            };


        }])
    .controller('problemsCtrl', ['$scope', '$stateParams', '$http', 'DataFactory',
        function ($scope, $stateParams, $http, DataFactory) {
            /**
             * Function for adding items to API
             * @param item
             */
            $scope.addProblem = function (item) {
                DataFactory.postProblemsData(item).then(function (success) {
                    console.log(success);
                    $scope.item.problem = "";

                }, function (error) {
                    console.log(error)
                });
                $scope.loadProblems();
            };
            /**
             * get Prescriptions form API
             */
            $scope.loadProblems = function () {
                DataFactory.getProblemData().then(function (problems) {
                    console.log(problems);
                    $scope.problems = problems;
                });
            };
            $scope.loadProblems();

            /**
             * edit item
             * @param index
             */
            $scope.editItem = function (index) {
                $scope.selectedItemIndex = index;
                $scope.item = $scope.problems[index];
            };

            $scope.editProblem = function (data) {
                DataFactory.putProblemsData(data).then(function (success) {
                    console.log("edit request success", success);
                }, function (error) {
                    console.log("edit request failed", error);
                });
                $scope.loadProblems();
            };


            /**
             * delete item
             * @param data
             */
            $scope.deleteProblem = function (data) {
                DataFactory.deleteProblemsData(data).then(function (response) {
                    console.log("delete success ", response);
                }, function (response) {
                    console.log("delete failed ", response.data);
                });
                $scope.loadProblems();
            };


        }]);