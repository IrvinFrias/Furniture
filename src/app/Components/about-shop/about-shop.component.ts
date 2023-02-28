import { Component } from '@angular/core';
interface Fact{
  number: string,
  field: string
}
interface Image{
  src: string,
  alt: string
}


@Component({
  selector: 'app-about-shop',
  templateUrl: './about-shop.component.html',
  styleUrls: ['./about-shop.component.css']
})
export class AboutShopComponent {
  facts: Fact[] =[
    {number: '110 +', field: 'Project Completed'},
    {number: '20 +', field: 'Client MexicoWide'},
    {number: '215 +', field: 'Clients review'}
  ]
  img: Image = {src:'assets/about-chop/aboutChop.png', alt: 'product furniture'}

}
