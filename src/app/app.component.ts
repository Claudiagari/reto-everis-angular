import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';
import { AngularFireAuth} from "angularfire2/auth/auth";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = true;
  user: any = {}
  constructor(private autorizacionService: AutorizacionService, private angularFireAuth: AngularFireAuth,) {

    this.autorizacionService.isLogged()
      .subscribe((result) => {
        if (result && result.uid){
          this.loggedIn = false;
          this.user.email=result.email
        } else {
          this.loggedIn = true;
        }
      }, (error) => {
        this.loggedIn = true;
      })
  }
}
