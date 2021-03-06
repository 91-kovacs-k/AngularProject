import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  @Input() question: string;
  @Input() people: Person[];
  
  agreed = 0;
  disagreed = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleVote(agree: boolean){
    agree ? this.agreed++ : this.disagreed++;
  }


}
