'use strict';

eventsApp.controller('EventController', function($scope){
    $scope.event = {
        name : 'Angular Boot Camp',
        date : '3/5/2016',
        time : '10:30',
        price : 34,
        location :{
            address : '863 Monseigneur Grandin',
            city : 'Quebec',
            province : 'Quebec, QC'
        },
        imageUrl : '/img/angularjs-logo.png',
        sessions : [
            {
                name : 'Directives Masterclass',
                creatorName : 'Bob Smith',
                duration : '1 hr',
                level : 'Advanced',
                abstract : 'Vice semiotics echo park pinterest letterpress occupy, godard venmo aesthetic. Banh mi typewriter sriracha migas selvage blog. Viral slow-carb venmo, intelligentsia hammock microdosing health goth hoodie ethical selfies tumblr letterpress butcher distillery squid.',
                upVoteCount : 0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName : 'John Doe',
                duration : '1 hr',
                level : 'Introductory',
                abstract : 'Vice semiotics echo park pinterest letterpress occupy, godard venmo aesthetic. Banh mi typewriter sriracha migas selvage blog. Viral slow-carb venmo, intelligentsia hammock microdosing health goth hoodie ethical selfies tumblr letterpress butcher distillery squid.',
                upVoteCount : 0
            },
            {
                name: 'Well behaved controllers',
                creatorName : 'John Doe',
                duration : '1 hr',
                level : 'Introductory',
                abstract : 'Vice semiotics echo park pinterest letterpress occupy, godard venmo aesthetic. Banh mi typewriter sriracha migas selvage blog. Viral slow-carb venmo, intelligentsia hammock microdosing health goth hoodie ethical selfies tumblr letterpress butcher distillery squid.',
                upVoteCount : 0
            }
        ]
    };
    
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    };
    
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    };
    
});