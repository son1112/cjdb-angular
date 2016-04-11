app.controller('ProductsController', ProductsController);

function ProductsController($rootScope, Products, md5) {

    var vm = this;

    vm.addProduct = addProduct;
    vm.md5 = md5;
    vm.productData = Products;

    function addProduct() {
        if(vm.productDesc) {
            vm.productData.$add({

                desc: vm.productDesc,
                gauge: vm.productGauge,
                id: vm.productId,
                price: vm.productPrice,
                size: vm.productSize,
                supply: vm.productSupply,
                user: {
                    username: $rootScope.loggedInUserData.username,
                    email: $rootScope.loggedInUserData.email
                }

            });
            vm.productDesc = '';
        }
    }

    function deleteProduct(product) {

        vm.productData.$remove(product);
    }

}
