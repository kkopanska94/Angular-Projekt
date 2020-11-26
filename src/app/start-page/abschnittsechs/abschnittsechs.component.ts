import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abschnittsechs',
  templateUrl: './abschnittsechs.component.html',
  styleUrls: ['./abschnittsechs.component.scss']
})
export class AbschnittsechsComponent implements OnInit {

  list=[1,2,3];
  viewMode='ursprung';
  constructor() { }

  ngOnInit(): void {
  }

}
