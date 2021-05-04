import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { AsteroidsComponent } from './pages/asteroids/asteroids.component';
import { DayspictureComponent } from './pages/dayspicture/dayspicture.component';
import { SubmitPlanetComponent } from './pages/submit-planet/submit-planet.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainMenuComponent } from './shared/navigation/main-menu/main-menu.component';
import { LangSwitchComponent } from './shared/navigation/lang-switch/lang-switch.component';
import { MainLogoComponent } from './shared/navigation/main-logo/main-logo.component';
import { LoadbarComponent } from './shared/loadbar/loadbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NotifierComponent } from './shared/notifier/notifier.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    LangSwitchComponent,
    MainLogoComponent,
    LoadbarComponent,
    NotifierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    TranslateModule.forRoot(
      {
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader, // exported factory function needed for AoT compilation
          deps: [HttpClient]
        }
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
