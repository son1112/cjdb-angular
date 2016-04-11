'use strict';

app.controller('MainController', ['$scope', '$firebaseObject', '$firebaseArray', '$firebaseAuth', function($scope, $firebaseObject, $firebaseArray, $firebaseAuth) {
    //products.success(function(data) {
    //$scope.products = data;
    //});

    var ref = new Firebase("https://cjapp.firebaseio.com/products");
    $scope.products = $firebaseArray(ref);

    $scope.addProduct = function() {
        $scope.products.$add({

            desc: $scope.productDesc,
            gauge: $scope.productGauge,
            id: $scope.productId,
            price: $scope.productPrice,
            size: $scope.productSize,
            supply: $scope.productSupply

        });
    };

    var auth = $firebaseAuth(ref);

    // auth.$authWithOAuthPopup("facebook").then(function(authData) {
    //     console.log("Logged in as:", authData.uid);
    // ).catch(function(error) {
    //     console.log("Authentication failed:", error);
    // );
}]);
