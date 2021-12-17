import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapInsideComponent } from '../map-inside/map-inside.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
  },
  { path: 'map-inside', loadChildren: () => import('../../routes/map-inside/map-inside.module').then(m => m.MapInsideModule) },
  { path: 'map-outside', loadChildren: () => import('../../routes/map-outside/map-outside.module').then(m => m.MapOutsideModule) }
];

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MapModule { }
