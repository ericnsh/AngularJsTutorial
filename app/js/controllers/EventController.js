'use strict';

eventsApp.controller('EventController', function($scope, eventData){
        
    eventData.getEvent()
        .$promise
        .then(function(event){ $scope.event = event;})
        .catch(function(response){ console.log(response);})
    
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    };
    
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    };   
    
});