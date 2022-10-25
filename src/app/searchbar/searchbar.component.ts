import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [ UserService ]
})
export class SearchbarComponent implements OnInit {



public searchResultName: any = ""
public searchResultInstrument: any = ""
public searchResultGenre: any = ""
public searchResultDistance: any = ""
public searchResultValues: String[] = []

// @Input() value: string | undefined
@Output() valuesToEmit = new EventEmitter<String>();

  constructor(private userService: UserService) { 
  }
  home = true;
  switchView() {
    this.home = false;
  }
  ngOnInit(): void {
  }

  submitSearchResults() {

    if (this.searchResultName){this.searchResultValues.push(`name=${this.searchResultName}`)}
    if (this.searchResultInstrument){this.searchResultValues.push(`instrument=${this.searchResultInstrument}`)}
    if (this.searchResultGenre){this.searchResultValues.push(`genre=${this.searchResultGenre}`)}
    if (this.searchResultDistance){this.searchResultValues.push(`distance=${this.searchResultDistance}`)}
    const valuesToSend:string = this.searchResultValues.join('&')
    // this.valuesToEmit.emit(valuesToSend)
    console.log(this.searchResultName)
    console.log(this.searchResultInstrument)
    console.log(this.searchResultGenre)
    console.log(this.searchResultDistance)
    console.log(this.searchResultValues)
    console.log(valuesToSend) //)
    this.userService.sendJammerSearchParams(valuesToSend)
  }

}
