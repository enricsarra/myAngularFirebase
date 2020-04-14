import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import * as firebase from 'firebase/app';

import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService
  ]
})
export class MdFirebaseAuthModule { }
