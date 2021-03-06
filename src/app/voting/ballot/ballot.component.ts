import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/person';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent implements OnInit {

  @Input() person: Person;
  @Output() voteResult: EventEmitter<boolean> = new EventEmitter();
 

  constructor() { }

  ngOnInit(): void {
  }

  handleAgree(){
    this.person.voted = true;
    this.voteResult.emit(true);
  }

  handleDisagree(){
    this.person.voted = true;
    this.voteResult.emit(false);
  }



}
