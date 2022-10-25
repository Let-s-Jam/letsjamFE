import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { JammerProfileComponent } from '../jammer-profile/jammer-profile.component';
import { __values } from 'tslib';

@Component({
  selector: 'app-results-container',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})

export class ResultsPageComponent implements OnInit {

  // public valuesToSend: string = ""

  // @Input() emitValues = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {

  }

  // emitThoseValues() {
  //   console.log("results page component valuestosend", this.valuesToSend)
  //   this.emitValues.emit(this.valuesToSend)
  // }

}
