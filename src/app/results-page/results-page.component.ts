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
  constructor() { }

  ngOnInit(): void {

  }
}
