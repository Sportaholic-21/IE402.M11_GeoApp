import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AuthenticationComponent } from './layouts/auth-layout/authentication/authentication.component';
import { LoginComponent } from './layouts/auth-layout/login/login.component';
import { SignUpComponent } from './layouts/auth-layout/sign-up/sign-up.component';
import { BookingComponent } from './routes/booking/booking.component';
import { ContactComponent } from './routes/contact/contact.component';
import { MapComponent } from './routes/map/map.component';
import { HomeComponent } from './routes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    // AuthLayoutComponent,
    // ClientLayoutComponent,
    // AuthenticationComponent,
    // LoginComponent,
    // SignUpComponent,
    // BookingComponent,
    // ContactComponent,
    // MapComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
