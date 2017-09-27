import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//$IMPORTSTATEMENT

/**
 * Generated class for the Slides page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/* $IONICPAGE$ */
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slides');
  }

}
