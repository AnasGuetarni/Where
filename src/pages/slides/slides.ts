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

  slides = [
{
  title: "Welcome to the Docs!",
  description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
  image: "",
},
{
  title: "What is Ionic?",
  description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
  image: "",
},
{
  title: "What is Ionic Cloud?",
  description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
  image: "",
}
];


  ionViewDidLoad() {
    console.log('ionViewDidLoad Slides');
  }

}
