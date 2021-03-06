import { Component } from '@angular/core';
import { changeLogEntry } from './changelog-entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';

  major = 0;
  minor = 0;
  patch = 1;

  changeLog: changeLogEntry[] = [
    { type: 'patch', oldValue: 0, newValue: 1 }
  ];

  handleMajorVersionInc() {
    /*
    this.major++;
    this.minor = 0;
    this.patch = 0;

    this.changeLog.push({type: 'major', oldValue: this.major-1, newValue: this.major});
    */

    this.minor = 0;
    this.patch = 0;

    this.changeLog.push({type: 'major', oldValue: this.major, newValue: ++this.major});
  }

  handleMinorVersionInc() {
    /*
    this.minor++;
    this.patch = 0;
    */

    this.patch = 0;
    this.changeLog.push({type: 'minor', oldValue: this.minor, newValue: ++this.minor});
  }

  handlePatchVersionInc() {
    this.patch++;

    this.changeLog.push({type: 'patch', oldValue: this.patch-1, newValue: this.patch});
  }


}

