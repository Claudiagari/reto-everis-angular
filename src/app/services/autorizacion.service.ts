import { Injectable } from "@angular/core";
import { AngularFireAuth} from "angularfire2/auth/auth";
import {Router} from "@angular/router";
@Injectable()

export class AutorizacionService{
  constructor(private angularFireAuth: AngularFireAuth, private router:Router){
    this.isLogged();
  }
  public login = (email,password) =>{
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
    .then((response)=>{
        alert('Usuario Loggeado con éxito!');
        console.log(response.user.email);
        this.router.navigate(['home'])
    })
    .catch((error)=>{
        alert('Un error ha ocurrido');
        console.log(error);
    })
  }
  public isLogged(){
    return this.angularFireAuth.authState;
}
}