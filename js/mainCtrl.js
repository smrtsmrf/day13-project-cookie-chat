angular.module('chatroom').controller('mainCtrl', function($scope, messageService){
  //In your controller you'll have a getMessages function and a postMessage function, but should be placed on $scope.

  //The getMessages function will call the getData method on the messageService object. You'll then save the result of that request to
  //your controllers $scope as messages ($scope.messages)
    $scope.getMessages = function () {
       messageService.getData().then(function (response) {
        // console.log(response);
          $scope.messages = response;

       })
    }

    $scope.show = false;
    $scope.more = false;

    $scope.getCookie = function () {
       messageService.getCookie().then(function (response) {
          $scope.cookies = response;
       })
    }

    $scope.postCookie = function () {
       messageService.postCookie().then(function () {
        
       })
    }

    // $scope.showMore = function () {
    //   $scope.more = !$scope.more;
    // }



  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will then post it to the backend.
      $scope.postMessage = function () {
          messageService.postData($scope.message);
          $scope.message = '';
      }


  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  setInterval(function(){
    $scope.getMessages();

  }, 1500)
})
