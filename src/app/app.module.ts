import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePageModule } from '../pages/home/home.module';
import { ScanPageModule } from '../pages/scan/scan.module';
import { PrimaryTabsPageModule } from '../pages/primary-tabs/primary-tabs.module';
import { InfoPageModule } from '../pages/info/info.module';


import { SQLite } from '@ionic-native/sqlite';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DbProvider } from '../providers/db/db';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    ScanPageModule,
    PrimaryTabsPageModule,
    InfoPageModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    InAppBrowser,
    BarcodeScanner,
    DbProvider,
    HttpClient,
    PrimaryTabsPageModule,
  ]
})
export class AppModule {}
