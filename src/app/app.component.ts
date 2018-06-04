import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DbProvider } from '../providers/db/db';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'PrimaryTabsPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public dbService: DbProvider, ) {
    platform.ready()
      .then(() => {
        this.dbService.execute(() => { this.dbService.createTable(); });

      });
    statusBar.styleDefault();
    splashScreen.hide();

  }
}

