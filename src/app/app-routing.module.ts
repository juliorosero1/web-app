import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { PersonalComponent } from './screens/personal/personal.component';
import { NosotrosComponent } from './screens/nosotros/nosotros.component';
import { AdministracionComponent } from './screens/administracion/administracion.component';

const routes: Routes = [
  { path: 'inicio', component:HomeComponent},
  { path: 'personal', component: PersonalComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'administracion', component:AdministracionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
