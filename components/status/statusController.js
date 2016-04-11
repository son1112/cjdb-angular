app.controller('StatusController', StatusController);

function StatusController($rootScope, Status, md5) {

    var vm = this;

    vm.addStatus = addStatus;
    vm.md5 = md5;
    vm.statusData = Status;

    function addStatus() {
        if(vm.statusText) {
            vm.statusData.$add({

                // Add the status data to Firebase
                date: Firebase.ServerValue.TIMESTAMP,
                text: vm.statusText,
                user: {
                    username: $rootScope.loggedInUserData.username,
                    email: $rootScope.loggedInUserData.email
                }
            });
            vm.statusText = '';
        }
    }
}
        
