'use strict';

eventsApp.controller('EventController', function($scope, eventData){
    
    eventData.getEvent(function(event){
        $scope.event = event;
    });
    
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    };
    
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    };
    
});