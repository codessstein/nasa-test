import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { AsteroidsComponent } from './pages/asteroids/asteroids.component';
import { DayspictureComponent } from './pages/dayspicture/dayspicture.component';
import { SubmitPlanetComponent } from './pages/submit-planet/submit-planet.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainMenuComponent } from './shared/navigation/main-menu/main-menu.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    AsteroidsComponent,
    DayspictureComponent,
    SubmitPlanetComponent,
    NotFoundComponent,
    MainMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
