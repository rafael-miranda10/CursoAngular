import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName = "Rafael";
   age = 100;

  person = {
    firstName : "Rafael",
    lastName: "Miranda",
    age: 50,
    address: "Route 100"
  }

  constructor() { }

  ngOnInit() {
  }

}
