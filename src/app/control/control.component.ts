import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Output() major: EventEmitter<any> = new EventEmitter(); 
  @Output() minor: EventEmitter<any> = new EventEmitter(); 
  @Output() patch: EventEmitter<any> = new EventEmitter(); 
 


  constructor() { }

  ngOnInit(): void {
  }
  


}
