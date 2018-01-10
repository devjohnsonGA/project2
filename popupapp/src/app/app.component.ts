import { Component } from '@angular/core';

@Component({
  selector: './app.component.spec.ts',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PopUp Shop';
}

// var app = angular.module('popupApp', []);

// app.controller('shopController', function($scope) {

//   $scope.owners = [
//     {'name': 'PopUp 1', 'lat':38.8977, 'lng':-77.0365},
//     {'name': 'PopUp 2', 'lat':38.7000, 'lng':-75.0365} ,
//     {'name': 'PopUp 3', 'lat':38.6977, 'lng':-76.0365}  
//   ];

//   $scope.addNew = function() {
//     alert('Add new PopUp Shop!');
//     $scope.users.push({'name': 'PopUp 4', 'lat':39.8977, 'lng':-75.0365} )
//   };

// });
