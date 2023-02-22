import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoute: Routes = [
  {path:'', component: LoginComponent},
  {path: 'infoPage', component: InfoPageComponent},
  {path: 'login', component: LoginComponent}
]
@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  ReactiveFormsModule, 
                  RouterModule.forRoot(appRoute)],
  declarations: [ AppComponent, InfoPageComponent, LoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

  
}
