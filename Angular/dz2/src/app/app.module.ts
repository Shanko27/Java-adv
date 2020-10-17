import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserComponent } from './components/user/user.component';
import {RouterModule} from "@angular/router";
import { PostComponent } from './components/post/post.component';
import { ComentComponent } from './components/coment/coment.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { AllComentComponent } from './components/all-coment/all-coment.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    UserComponent,
    PostComponent,
    ComentComponent,
    AllPostComponent,
    AllComentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', component: AllUserComponent
      },
      {
        path: 'posts', component: AllPostComponent
      },
      {
        path: 'coment', component: AllComentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
