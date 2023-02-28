import { Component } from '@angular/core';

interface Reasons{
  title: String,
  description: String,
}

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.css']
})
export class ChooseUsComponent {

  reasons: Reasons[] = [
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, id!'
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, id!'
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, id!'
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, id!'
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, id!'
    }

  ];

  images: String[] = ['assets/chooseUS/choose1.png','assets/chooseUS/choose2.png']

}
