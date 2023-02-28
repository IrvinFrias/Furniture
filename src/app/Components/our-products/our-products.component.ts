import { Component } from '@angular/core';
import {Image} from "../../../Types/Image";
import {Product} from "../../../Types/Product";

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent {
  img: Image = {src: 'assets/our-products/ourProduct.png', alt:'product image'}
  products: Product[] = [
    {
      src: 'assets/our-products/sillon.png',
      alt: 'product image',
      name: 'Sofa',
      price: '22,000'
    },
    {
      src: 'assets/our-products/desktop.png',
      alt: 'product image',
      name: 'Desktop',
      price: '10,000'
    },
    {
      src: 'assets/our-products/bed.png',
      alt: 'product image',
      name: 'Bed',
      price: '8,000'
    },

  ]
}
