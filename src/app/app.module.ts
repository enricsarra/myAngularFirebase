import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdFirebaseAuthModule } from './md-firebase-auth/md-firebase.auth.module';
import { MdFirebaseDataModule } from './md-firebase-data/md-firebase.data.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdFirebaseAuthModule,
    MdFirebaseDataModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
