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
import { PostComponent } from './post/post.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { DraftComponent } from './draft/draft.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AddPostComponent,
    HomeComponent,
    PostComponent,
    RegisterSuccessComponent,
    UpdateProfileComponent,
    DraftComponent
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
      { path:'home',component:HomeComponent},
      { path:'post/:id',component:PostComponent},
      { path:'register-success',component:RegisterSuccessComponent },
      { path:'update-profile',component:UpdateProfileComponent},
      { path:'draft',component:DraftComponent}
  
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
