import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllUsersComponent } from './Component/all-users/all-users.component';
import {RouterModule} from "@angular/router";
import { UserComponent } from './Component/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { AllPostsComponent } from './Component/all-posts/all-posts.component';
import { PostComponent } from './Component/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
   HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent, children:[
          {path:'posts/:id', component: UserComponent}
        ]}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
