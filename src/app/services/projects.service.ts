import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
//import { Http } from '@angular/http';

@Injectable()
export class ProjectsService{
  projects:any={}
  constructor(private afDB:AngularFireDatabase /*, private http: Http*/){
  }
    public getProjects(){
      return this.afDB.list('projects/')
    }
    public  searchProject(id) {
      return this.projects.filter((project) => { return project.id == id })[0] || null
    }
    public saveProject(project){
      console.log(project)
      this.afDB.database.ref('projects/'+project.id).set(project)
      
    }
    /*public obtenerGeoData (direccion){
      //http://maps.google.com/maps/api/geocode/xml?address=78-43+diagonal+70f,+Bogota,Colombia
      return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion)
    }*/
    public getProject(id){
      return this.afDB.object('projects/'+id);
  }
   }

