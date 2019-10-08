import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My Button";
  i = 0;
  spinnerMode = "determinate"; 
  btnEnable = true;
  selectDisabled = false;
  selectedOption = 1;

  constructor() { }

  ngOnInit() {
  }


  save(){
    console.log("Click!");
  }

  incremento(){
    this.i++;
    this.buttonName = "It was clicked "+ this.i + " times!";
  }

  disable(){
   this.btnEnable = false;
   this.spinnerMode = "indeterminate";
   setTimeout( () => {
       this.btnEnable = true;
       this.spinnerMode = "determinate";
   },6000);
  }

  cbChange(event){
    this.selectDisabled = event.checked;
  }

  selected(event){
    console.log(event);
    this.selectedOption = event.value;
  }
}
