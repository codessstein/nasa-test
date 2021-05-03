import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AsteroidsComponent } from './pages/asteroids/asteroids.component';
import { DayspictureComponent } from './pages/dayspicture/dayspicture.component';
import { SubmitPlanetComponent } from './pages/submit-planet/submit-planet.component'
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'asteroids', component: AsteroidsComponent },
  { path: 'picture', component:  DayspictureComponent},
  { path: 'submit-planet', component: SubmitPlanetComponent },
  { path: '**', component:  NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
