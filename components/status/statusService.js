app.factory('Status', StatusService);

function StatusService($firebaseArray) {
    var ref = new Firebase("https://statusapp.firebaseio.com/status");
    return $firebaseArray(ref);
}
