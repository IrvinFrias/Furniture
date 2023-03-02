import { Component } from '@angular/core';
import {Image} from "../../../Types/Image";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-our-gallery',
  templateUrl: './our-gallery.component.html',
  styleUrls: ['./our-gallery.component.css'],
})
export class OurGalleryComponent {
  images: Image[] = [
    {src: 'assets/gallery/photo5.png', alt: 'Gallery item'},
    {src: 'assets/gallery/photo6.png', alt: 'Gallery item'},
    {src: 'assets/gallery/photo3.png', alt: 'Gallery item'},
    {src: 'assets/gallery/photo7.png', alt: 'Gallery item'},
  ]

}
