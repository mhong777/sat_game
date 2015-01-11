'use strict';
angular.module('IonicTest.controllers', [])

//.controller('DashCtrl', function($scope) {
//})


.controller('DashCtrl', ['$scope', 'socket', function($scope, socket) {
    $scope.socketTest=function(){
        socket.emit('test msg', 'test message');
    };
    
    socket.on('test back', function(input){
        console.log(input); 
    });
}])

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
