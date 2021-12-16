import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './client-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home',
        loadChildren: () => import('../../routes/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../../routes/map/map.module').then(m => m.MapModule)
      },
      {
        path: 'booking',
        loadChildren: () => import('../../routes/booking/booking.module').then(m => m.BookingModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../../routes/contact/contact.module').then(m => m.ContactModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLayoutRoutingModule { }
