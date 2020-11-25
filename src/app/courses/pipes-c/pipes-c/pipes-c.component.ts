import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-c',
  templateUrl: './pipes-c.component.html',
  styleUrls: ['./pipes-c.component.scss']
})
export class PipesCComponent implements OnInit {
  
  card={

  titel:"titel",
  beschreibung:"irgendeine Beschreibung ",
  rating: 34.5644,
  preis:23.40
  }

  constructor() { }

  ngOnInit(): void {
  }

}
