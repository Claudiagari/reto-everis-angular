import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AutorizacionService } from './services/autorizacion.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProjectRegisterComponent} from './projectRegister/projectRegister.component';
import {ProjectsComponent} from './projects/projects.component';
import {RegisterMembersComponent} from './registerMembers/registerMembers.component'
import { ProjectsService } from './services/projects.service';

const appRoutes : Routes =[
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'projectRegister', component: ProjectRegisterComponent},
  {path:'registerMembers', component:RegisterMembersComponent},
    
];
export const firebaseConfig = {
  apiKey: "AIzaSyC99VEWNhXxK-bzOnoA2fd8A7HKBDnUuKk",
    authDomain: "reto-everis.firebaseapp.com",
    databaseURL: "https://reto-everis.firebaseio.com",
    projectId: "reto-everis",
    storageBucket: "reto-everis.appspot.com",
    messagingSenderId: "736180179872"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProjectRegisterComponent,
    ProjectsComponent,
    RegisterMembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [ProjectsService,AutorizacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
