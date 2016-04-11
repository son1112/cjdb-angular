app.factory('Products', ProductsService);

function ProductsService($firebaseArray) {
    var ref = new Firebase("https://cjapp.firebaseio.com/products");
    return $firebaseArray(ref);
}
