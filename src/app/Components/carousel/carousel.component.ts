import {Component, OnInit} from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import {NgbCarouselConfig, NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";

interface ImageCarrousel{
  path: String,
  alt: String,
  title: String,
  description: String,
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig],
})
export class CarouselComponent implements OnInit{

  images: ImageCarrousel[] = [
    {
      path: 'assets/corousel/carousel1.png',
      alt: 'image carrousel furniture',
      title: 'Forniture',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At et possimus quo ullam vitae, voluptatibus?'
    },
    {
      path: 'assets/corousel/carousel2.png',
      alt: 'image carrousel furniture',
      title: 'Forniture',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At et possimus quo ullam vitae, voluptatibus?'
    },
    {
      path: 'assets/corousel/carousel3.png',
      alt: 'image carrousel furniture',
      title: 'Forniture',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At et possimus quo ullam vitae, voluptatibus?'
    },

  ];

  ngOnInit() {
    //console.log(this.images);
  }

}
