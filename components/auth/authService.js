app.factory('Auth', AuthService);

function AuthService($firebaseAuth) {
    var ref = new Firebase("https://cjapp.firebaseio.com");
    return $firebaseAuth(ref);
}
