import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Components/home/home.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { ChooseUsComponent } from './Components/choose-us/choose-us.component';
import { AboutShopComponent } from './Components/about-shop/about-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    ChooseUsComponent,
    AboutShopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: 'home', component: HomeComponent}]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
