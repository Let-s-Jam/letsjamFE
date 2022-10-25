import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {



public searchResultName: any = ""
public searchResultInstrument: any = ""
public searchResultGenre: any = ""
public searchResultDistance: any = ""
public searchResultValues: String[] = [this.searchResultName, this.searchResultInstrument, this.searchResultGenre, this.searchResultDistance]

@Output() valuesToEmit = new EventEmitter<Array<String>>();

  constructor() { }
  home = true;
  switchView() {
    this.home = false;
  }
  ngOnInit(): void {
  }

  submitSearchResults() {
    this.valuesToEmit.emit(this.searchResultValues)
  }

}
