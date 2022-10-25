import { Component, OnInit, Input } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { JammerProfileComponent } from '../jammer-profile/jammer-profile.component';
@Component({
  selector: 'app-results-container',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  // @Input() navbar?: SearchbarComponent;



  constructor() { }

  ngOnInit(): void {

  }

}
