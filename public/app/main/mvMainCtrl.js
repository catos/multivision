angular.module('app').controller('mvMainCtrl', function($scope) {
    $scope.courses = [
        {name: "C# for Sociopaths", featured: true, published: new Date('1/1/2014')},
        {name: "C# for Non-Sociopaths", featured: true, published: new Date('2/1/2014')},
        {name: "Android Beginner Series: Just Enough Java", featured: true, published: new Date('2/1/2014')},
        {name: "Learning To Program - Being A Better Programmer", featured: false, published: new Date('2/3/2014')},
        {name: "BizTalk Server 2013 from Ground Up: An End to End Scenario", featured: true, published: new Date('2/1/2012')}
    ]
});