import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page/start-page.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { DataBindingComponent } from './start-page/data-binding/data-binding/data-binding.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { PipesCComponent } from './courses/pipes-c/pipes-c/pipes-c.component';
import { TestPipePipe } from './test-pipe.pipe';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HeaderComponent,
    FooterComponent,
    DataBindingComponent,
    CoursesComponent,
    PipesCComponent,
    TestPipePipe,
    DirectivesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
