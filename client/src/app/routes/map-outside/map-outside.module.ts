import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MapOutsideComponent } from './map-outside.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MapOutsideComponent,
  },
];
@NgModule({
  declarations: [
    MapOutsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MapOutsideModule { }
