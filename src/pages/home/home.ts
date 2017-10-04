import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HepiaPage } from '../hepia/hepia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
items = [
  'HEPIA',
  'Université de Genève',
  'Université de Zurich',
  'Université de Lausanne'
];

itemSelected(item: string) {
  console.log("Selected Item", item);
}

  constructor(public navCtrl: NavController) {  }


  navigateTo(item) {
  if(item == "HEPIA")
      this.navCtrl.push(HepiaPage);
}
}
