import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
//import { Http } from '@angular/http';

@Injectable()
export class ProjectsService{
  constructor(private afDB:AngularFireDatabase /*, private http: Http*/){
  }
    public getProjects(){
      //return this.afDB.list('projects/')
    }
    /*public  getPlace(id) {
      return this.lugares.filter((lugar) => { return lugar.id == id })[0] || null
    }*/
    public saveProject(project){
      console.log(project)
      
    }
    /*public obtenerGeoData (direccion){
      //http://maps.google.com/maps/api/geocode/xml?address=78-43+diagonal+70f,+Bogota,Colombia
      return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion)
    }*/
   }

