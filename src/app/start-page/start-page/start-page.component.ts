import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  imgUrl="./assets/images/grinch.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
