import { Component, OnInit } from '@angular/core';
import {AnniversaireComponent} from './anniversaire/anniversaire.component';
import {CongreComponent} from './congre/congre.component';
import {CocktailComponent} from './cocktail/cocktail.component';
import {FuneraillesComponent} from './funerailles/funerailles.component';
import {MariageComponent} from './mariage/mariage.component';
import {Route, RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {path: 'anniversaire', component: AnniversaireComponent},
  {path: 'congre', component: CongreComponent},
  {path: 'cocktail', component: CocktailComponent},
  {path: 'funerailles', component: FuneraillesComponent},
  {path: 'mariage', component: MariageComponent},
  {path: '', redirectTo: '/anniversaire', pathMatch: 'full'}
]
@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
