import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public oeuvresVu: any;
  public totalOeuvres: any;
  public oeuvresInfo = [];
  splash = true;
  tabBarElement: any;

  constructor(platform: Platform, public navCtrl: NavController, private dbService: DbProvider, public navParams: NavParams,) {

    platform.ready()
      .then(() => {
        this.dbService.execute(() => {
          this.getTotalOeuvres();
          this.getInfo();
          this.getOeuvresVu();
        });
      });
      this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 3000);
  }

  //Récupère Information de 'oeuvres'
  public getInfo(): any {
    this.dbService.db.executeSql("SELECT nom, prenom, qr_code, statut  FROM `oeuvres`", {})
      .then((data) => {
        if (data == null) {
          console.log('Empty Database');
          return;
        }
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) this.oeuvresInfo.push(data.rows.item(i));
          console.log(data.rows.item(0));
        }
        console.log('Result: ' + this.oeuvresInfo);

      }).catch(e => console.log('erreur getinfo() ' + e));

  }


  //Compte les oeuvres vues
  public getOeuvresVu(): void {
    this.dbService.db.executeSql('SELECT COUNT(statut) AS counted FROM `oeuvres` WHERE oeuvres.statut="checkmark-circle-outline"', {})
      .then((data) => {
        console.log('Oeuvres vu: ' + data.rows.item(0).counted);
        this.oeuvresVu = data.rows.item(0).counted;
      })
  }

  //Compte le nombre total d'oeuvres
  public getTotalOeuvres(): void {
    this.dbService.db.executeSql('SELECT COUNT(id) AS total FROM `oeuvres`', {})
      .then((data) => {
        console.log('Total: ' + data.rows.item(0).total);
        this.totalOeuvres = data.rows.item(0).total;
      })
  }

  public refreshPage() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}






