import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLayoutRoutingModule } from './client-layout-routing.module';
import { ClientLayoutComponent } from './client-layout.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ClientLayoutComponent
  ],
  imports: [
    CommonModule,
    ClientLayoutRoutingModule,
    ComponentsModule
  ]
})
export class ClientLayoutModule { }
