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
import { AnniversaireComponent } from './evenement/anniversaire/anniversaire.component';
import { CongreComponent } from './evenement/congre/congre.component';
import { CocktailComponent } from './evenement/cocktail/cocktail.component';
import { FuneraillesComponent } from './evenement/funerailles/funerailles.component';
import { MariageComponent } from './evenement/mariage/mariage.component';
import { ProposComponent } from './propos/propos.component';
import { FroidComponent } from './menu/froid/froid.component';
import { ChaudComponent } from './menu/chaud/chaud.component';
import { OeuvreComponent } from './menu/oeuvre/oeuvre.component';
import { PatisserieComponent } from './menu/patisserie/patisserie.component';
import { DejeunerComponent } from './menu/dejeuner/dejeuner.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'evenement', component: EvenementComponent},
  {path: 'propos', component: ProposComponent},
  {path: 'anniversaire', component: AnniversaireComponent},
  {path: 'congre', component: CongreComponent},
  {path: 'cocktail', component: CocktailComponent},
  {path: 'funerailles', component: FuneraillesComponent},
  {path: 'mariage', component: MariageComponent},
  {path: 'chaud', component: ChaudComponent},
  {path: 'dejeuner', component: DejeunerComponent},
  {path: 'froid', component: FroidComponent},
  {path: 'oeuvre', component: OeuvreComponent},
  {path: 'patisserie', component: PatisserieComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EvenementComponent,
    ContactComponent,
    AccueilComponent,
    AnniversaireComponent,
    CongreComponent,
    CocktailComponent,
    FuneraillesComponent,
    MariageComponent,
    ProposComponent,
    FroidComponent,
    ChaudComponent,
    OeuvreComponent,
    PatisserieComponent,
    DejeunerComponent
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
