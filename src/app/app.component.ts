import { Component, OnInit } from '@angular/core';
import { AuthService } from './md-firebase-auth/services/auth.service';
import { DataService } from './md-firebase-data/services/data.service';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myAngularFirebase';
  email = 'enricsarra@gmail.com';
  password = '123456';
  nombres = 'Enric Sarradell Pamies';
  /* email = 'sebastiasebas@gmail.com';
  password = '123456';
  nombres = 'SAG'; */
  respCrearCuentaEmailPass = '';
  respAutEmailPass = '';
  respAuthCuentaFacebook = '';
  respAuthCuentaTwitter = '';
  respAuthCuentaGitHub = '';
  respSignOut = '';
  respAddData = '';
  respDeleteDocument = '';
  respReadDocument = '';


  constructor( public autService: AuthService ,
               public dataService: DataService ) {}

  ngOnInit() {


  }



  callCrearCuentaEmailPass( ) {
    this.crearCuentaEmailPass(this.email, this.password, this.nombres );
  }

  callautEmailPass( ) {
    this.autEmailPass(this.email, this.password);
  }

  callAuthCuentaFacebook( ) {
    this.authCuentaFacebook();
  }

  callAuthCuentaTwitter( ) {
    this.authCuentaTwitter();
  }

  callAuthCuentaGitHub( ) {
    this.authCuentaGitHub();
  }

  // calls a base dades-------------------------------->

  callAddData( ) {
    this.addData();
  }

  callDeleteDocument( ) {
    this.deleteDocument();
  }
  callReadDocument( ) {
    this.readDocument();
  }








  callsignOut( ) {

    this.signOut();
  }




  crearCuentaEmailPass( email, password, nombres ) {

    this.autService.crearCuentaEmailPass( email, password, nombres )
    .then( resp => {
      this.respCrearCuentaEmailPass = resp;
      // this.respCrearCuentaEmailPass = JSON.stringify(resp);
    })
    .catch( error => {
      this.respCrearCuentaEmailPass = error;
    });

  }



  autEmailPass( email, password) {

    this.autService.autEmailPass( email, password )
    .then( resp => {
      this.respAutEmailPass = resp;
    })
    .catch( error => {
      this.respAutEmailPass = error;
    });

  }

  authCuentaFacebook() {

    this.autService.authCuentaFacebook()
    .then( resp => {
      this.respAuthCuentaFacebook = resp;
    })
    .catch( error => {
      this.respAuthCuentaFacebook = error;
    });

  }

  async authCuentaTwitter() {
    // una altra manera de fer-ho
    try {
       const userWrk = await this.autService.authCuentaTwitter();
       this.respAuthCuentaTwitter = userWrk;

    } catch ( error ) {
      this.respAuthCuentaTwitter = error;
    }
  }

  async authCuentaGitHub() {
    // una altra manera de fer-ho
    try {
       const userWrk = await this.autService.authCuentaGitHub();
       this.respAuthCuentaGitHub = userWrk;

    } catch ( error ) {
      this.respAuthCuentaGitHub = error;
    }
  }





  signOut( ) {

   this.autService.signOut()
   .then(resp => this.respSignOut = resp)
   .catch(err => this.respSignOut = err);

  }


  async addData() {
      try {
        const collection = environment.dbCollection;
        const resp = await this.dataService.add(collection, this.autService.dataAuth);
        // id del documento y sino el error
        this.respAddData = resp.id || resp;

      } catch ( error ) {
        this.respAddData = error;
      }
    }

    async deleteDocument() {
      try {
        const collection = environment.dbCollection;
        const document = this.respAddData;
        const resp = await this.dataService.deleteDocument(collection, document);
        this.respDeleteDocument = resp;
      } catch ( error ) {
        this.respDeleteDocument = error;
      }
    }

    async readDocument() {
      try {
        const collection = environment.dbCollection;
        const document = this.respAddData;
        const resp = await this.dataService.readDocument(collection, document);
        this.respReadDocument = resp;
      } catch ( error ) {
        this.respReadDocument = error;
      }
    }





  }










