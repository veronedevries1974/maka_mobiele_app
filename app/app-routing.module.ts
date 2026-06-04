import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child2aComponent } from './child2a/child2a.component';
import { Child2bComponent } from './child2b/child2b.component';
import { Child3Component } from './child3/child3.component';

const routes: Routes = [
  { 
    path: '', 
    component: ParentComponent 
  }, // Home
  { 
    path: 'child', 
    component: ChildComponent 
  }, // Prijslijst
  { 
    path: 'child2', 
    component: Child2Component, // Activiteiten Hoofdpagina
    children: [
      { path: 'child2a', component: Child2aComponent }, // Wandelen -> /#/child2/child2a
      { path: 'child2b', component: Child2bComponent }  // Kanoën -> /#/child2/child2b
    ]
  }, 
  { 
    path: 'child3', 
    component: Child3Component 
  } // Openingstijden
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      preloadingStrategy: PreloadAllModules, 
      useHash: true 
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }