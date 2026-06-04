import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component'; // GECORRIGEERD: Deze import ontbrak!
import { Child2aComponent } from './child2a/child2a.component';
import { Child2bComponent } from './child2b/child2b.component';

const routes: Routes = [
  { path: '', component: ParentComponent }, // home
  { path: 'child', component: ChildComponent }, // prijslijst
  { 
    path: 'child2', 
    component: Child2Component, // activiteiten
    children: [
      /* Als iemand naar /child2 gaat, sturen we ze direct door naar de wandelpagina */
      { path: '', redirectTo: 'wandelen', pathMatch: 'full' }, 
      { path: 'wandelen', component: Child2aComponent }, // wandelen in activiteiten
      { path: 'kanoen', component: Child2bComponent }   // kanoen in activiteiten
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      preloadingStrategy: PreloadAllModules,
      useHash: true // FIX: Voorkomt 'Cannot GET' errors bij pagina-refresh
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }