import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from "./Components/home/home.component";
import { CarouselComponent } from './Components/carousel/carousel.component';
import { ChooseUsComponent } from './Components/choose-us/choose-us.component';
import { AboutShopComponent } from './Components/about-shop/about-shop.component';
import { OurProductsComponent } from './Components/our-products/our-products.component';
import { OurGalleryComponent } from './Components/our-gallery/our-gallery.component';
import { CustomerSaysComponent } from './Components/customer-says/customer-says.component';
import { NewslatterComponent } from './Components/newslatter/newslatter.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    ChooseUsComponent,
    AboutShopComponent,
    OurProductsComponent,
    OurGalleryComponent,
    CustomerSaysComponent,
    NewslatterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'about', component:AboutShopComponent},
        {path: 'products', component:OurProductsComponent},
        {path: 'contact', component:OurGalleryComponent}
      ]
    ),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
