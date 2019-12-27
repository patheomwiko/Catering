import { Component, OnInit } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {ChaudComponent} from './chaud/chaud.component';
import {DejeunerComponent} from './dejeuner/dejeuner.component';
import {FroidComponent} from './froid/froid.component';
import {OeuvreComponent} from './oeuvre/oeuvre.component';
import {PatisserieComponent} from './patisserie/patisserie.component';
const routes: Routes = [
  {path: 'chaud', component: ChaudComponent},
  {path: 'dejeuner', component: DejeunerComponent},
  {path: 'froid', component: FroidComponent},
  {path: 'oeuvre', component: OeuvreComponent},
  {path: 'patesserie', component: PatisserieComponent},
  {path: '', redirectTo: '/chaud', pathMatch: 'full'}
]
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
