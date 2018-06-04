import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-primary-tabs',
  templateUrl: 'primary-tabs.html'
})
export class PrimaryTabsPage {


  homeRoot = 'HomePage'
  scanRoot = 'ScanPage'
  infoRoot = 'InfoPage'


  constructor(public navCtrl: NavController ) {
    

  }


}
