'use strict';

eventsApp.controller('EventController', function($scope, eventData){
    
    $scope.event = eventData.event;
    
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    };
    
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    };
    
});