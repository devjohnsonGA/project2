import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

var app = angular.module('popupApp', []);

app.controller('shopController', function($scope) {

  $scope.owners = [
    {'name': 'PopUp 1', 'lat':38.8977, 'lng':-77.0365},
    {'name': 'PopUp 2', 'lat':38.7000, 'lng':-75.0365} ,
    {'name': 'PopUp 3', 'lat':38.6977, 'lng':-76.0365}  
  ];

  $scope.addNew = function() {
    alert('Add new PopUp Shop!');
    $scope.users.push({'name': 'PopUp 4', 'lat':39.8977, 'lng':-75.0365} )
  };

});
