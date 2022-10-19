import { Component, OnInit } from '@angular/core';
import { FOUNDJAMMERS } from 'src/dummy-data';

@Component({
  selector: 'app-jammer-profile',
  templateUrl: './jammer-profile.component.html',
  styleUrls: ['./jammer-profile.component.css']
})
export class JammerProfileComponent implements OnInit {

  constructor() { }

  found = FOUNDJAMMERS;

  ngOnInit(): void {
  }

}
