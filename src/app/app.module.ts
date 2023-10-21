import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { NosotrosComponent } from './screens/nosotros/nosotros.component';
import { PersonalComponent } from './screens/personal/personal.component';
import { AdministracionComponent } from './screens/administracion/administracion.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TablaComponent } from './components/tabla/tabla.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    PersonalComponent,
    AdministracionComponent,
    NavBarComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
