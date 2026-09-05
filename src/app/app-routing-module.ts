import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManUtd } from './man-utd/man-utd';
import { PL } from './pl/pl';
import { Vidi } from './vidi/vidi';
import { NbII } from './nb-ii/nb-ii';
import { Hiba } from './hiba/hiba';

const routes: Routes = [
{path:"", redirectTo: "manutd", pathMatch:"full"},
{path:"manutd", component: ManUtd},
{path: "pl", component: PL},
{path: "vidi", component: Vidi},
{path: "nbII", component: NbII},
{path:"**", component: Hiba}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
