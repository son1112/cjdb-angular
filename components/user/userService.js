app.factory('User', UserService);

function UserService($firebaseObject) {

    function newUserRef(user) {
        var ref = new Firebase("https://cjapp.firebaseio.com/user/" + user.uid);
        return $firebaseObject(ref);
    }

    function getUserData(user) {
        var ref = new Firebase("https://cjapp.firebaseio.com/user/" + user);
        return $firebaseObject(ref);
    }

    function getLoggedInUser() {
        var user = localStorage.getItem('firebase:session::cjapp');
        if(user) {
            return JSON.parse(user);
        }
    }

    return {
        newUserRef: newUserRef,
        getUserData: getUserData,
        getLoggedInUser: getLoggedInUser
    }

}
