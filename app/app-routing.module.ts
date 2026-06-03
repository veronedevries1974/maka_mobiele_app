import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child2aComponent } from './child2a/child2a.component';
import { Child2bComponent } from './child2b/child2b.component';

const routes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'prijslijst', component: ChildComponent },
  { path: 'activiteiten/wandelen', component: Child2aComponent },
  { path: 'activiteiten/kanoen', component: Child2bComponent },
  { path: '**', redirectTo: '' } // Catch-all: stuurt onbekende routes terug naar home
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