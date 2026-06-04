import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { Child2Component } from "./child2/child2.component";
import { Child2aComponent } from "./child2a/child2a.component";
import { Child2bComponent } from "./child2b/child2b.component";
import { Child3Component } from "./child3/child3.component";

const routes: Routes = [
  { path: '', component: ParentComponent },      // home
  { path: 'child', component: ChildComponent },  // prijslijst
  { 
    path: 'child2', 
    component: Child2Component,                  // activiteiten (hoofdpagina)
    children: [                                  // <--- Subpagina's starten hier
      { path: 'child2a', component: Child2aComponent }, // wandelen -> URL wordt: /child2/child2a
      { path: 'child2b', component: Child2bComponent }  // kanoen   -> URL wordt: /child2/child2b
    ]
  },
  { path: 'child3', component: Child3Component } // openingstijden
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],//importeert routesfunctie
    exports: [RouterModule] //forRoot start routering en maakt beschikbaar voor hele app
})

export class AppRoutingModule{} //exporteert routerfunctie naar hoofdmodule app.module.ts