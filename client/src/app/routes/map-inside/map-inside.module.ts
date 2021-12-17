import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MapInsideComponent } from './map-inside.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MapInsideComponent,
  },
];

@NgModule({
  declarations: [
    MapInsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MapInsideModule { }
