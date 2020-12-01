
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TestPipePipe } from './test-pipe.pipe';
import { AbschnittsechsComponent } from './start-page/abschnittsechs/abschnittsechs.component';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'start-page', component: StartPageComponent },
  { path: 'contact-form', component: ContactFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HeaderComponent,
    FooterComponent,
    DataBindingComponent,
    CoursesComponent,
    TestPipePipe,
    AbschnittsechsComponent,
    ContactFormComponent,
    PostsComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
 

  ],
  exports: [RouterModule],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
