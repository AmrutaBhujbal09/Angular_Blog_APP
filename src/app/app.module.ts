import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AddPostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    
    HttpClientModule,
    NgxWebstorageModule.forRoot(),

    RouterModule.forRoot([
      { path:'login',component:LoginComponent },
      { path:'add-post',component:AddPostComponent},
      { path:'register',component:RegisterComponent },
      { path:'home',component:HomeComponent}
  
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
