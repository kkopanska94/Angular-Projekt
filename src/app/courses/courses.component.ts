import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses;
  RightToLeft="rtl";
  istActive="true";
  content: any;
  display = true;


  onClick(){
      console.log("Clicked!!!")
      
  }


  constructor(service:CoursesService) { 
    
    this.courses = service.getCourses();

  }

  ngOnInit(): void {
  }

}
