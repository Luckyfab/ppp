import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';

import { Routes } from '@angular/router';
const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'home', component: HomeComponent }
];

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule,RouterModule,
                  MatSidenavModule,MatListModule ,
                  MatToolbarModule, MatButtonModule ,
                  MatIconModule, 
                  RouterModule.forRoot(routes, {useHash: true}),
                ],
  declarations: [ AppComponent, HelloComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
