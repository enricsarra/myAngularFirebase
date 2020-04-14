
export class DataAuth {

  uid: string;
  displayname: string;
  email: string;
  emailverified: boolean;
  photourl: string;
  lastsignintime: string;
  creationtime: string;
  datacreationinapp: number;

    constructor( ) {
        this.uid = '';
        this.displayname = '';
        this.email = '';
        this.emailverified = false;
        this.photourl = '';
        this.lastsignintime = '';
        this.creationtime = '';

        this.datacreationinapp = new Date().getTime();

    }
}


