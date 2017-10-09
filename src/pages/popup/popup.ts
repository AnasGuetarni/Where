import { Component } from '@angular/core';
import { ModalController,NavController,NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html',
})

export class PopupPage {

  static get parameters() {
    return [[NavController]];
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  presentContactModal() {
      let contactModal = this.modalCtrl.create(ContactUs);
      contactModal.present();
    }

   presentProfileModal() {
     let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
      profileModal.onDidDismiss(data => {
        console.log(data);
      });
      profileModal.present();
  }
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad Popup');
  }

}
