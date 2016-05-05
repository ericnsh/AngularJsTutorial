'use strict';

eventsApp.controller('EventController', 

    function EventController($scope, eventData, $routeParams){
            
        eventData.getEvent($routeParams.eventId)
            .$promise
            .then(function(event){ $scope.event = event;})
            .catch(function(response){ console.log(response);})
        
        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };
        
        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };    
    }
);