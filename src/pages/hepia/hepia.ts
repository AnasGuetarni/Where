import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';



/**
 * Generated class for the Hepia page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-hepia',
  templateUrl: 'hepia.html',
})
export class HepiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hepia');
  }

}
