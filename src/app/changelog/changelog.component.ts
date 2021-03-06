import { Component, Input, OnInit } from '@angular/core';
import { changeLogEntry } from '../changelog-entry';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {

  @Input() changelog: changeLogEntry[];

  constructor() { }

  ngOnInit(): void {
  }

  

}
