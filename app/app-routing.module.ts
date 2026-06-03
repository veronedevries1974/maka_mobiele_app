import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component'; 
import { Child2Component } from './child2/child2.component'; 
import { Child2aComponent } from './child2a/child2a.component'; 
import { Child2bComponent } from './child2b/child2b.component'; 

const routes: Routes = [
  {
    path: '',
    component: ParentComponent 
  },
  {
    path: 'prijslijst',
    component: ChildComponent 
  },
  {
    path: 'activiteiten',
    component: Child2Component,
    children: [
      {
        path: 'wandelen',
        component: Child2aComponent
      },
      {
        path: 'kanoen',
        component: Child2bComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}