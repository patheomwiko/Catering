import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, ButtonsModule } from 'angular-bootstrap-md';
import { MenuComponent } from './menu/menu.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ContactComponent } from './contact/contact.component';
import {Route, RouterModule, Routes} from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'evenement', component: EvenementComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EvenementComponent,
    ContactComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    ButtonsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
