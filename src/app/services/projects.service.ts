import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Router } from "@angular/router";
//import { Http } from '@angular/http';

@Injectable()
export class ProjectsService {
  projects: any = {}
  constructor(private afDB: AngularFireDatabase ,private router:Router) {
  }
  public getProjects() {
    return this.afDB.list('projects/')
  }
  public searchProject(id) {
    return this.projects.filter((project) => { return project.id == id })[0] || null
  }
  public saveProject(project) {
    console.log(project)
    this.afDB.database.ref('projects/' + project.id).set(project)
    this.router.navigate(['home'])
  }
  public editProject(project ){
    this.afDB.database.ref('projects/'+project.id).set(project);
    this.router.navigate(['project/'+project.id])
  }
  public updateProject(id){
    return this.afDB.object('projects/'+id);
  }
  public getProject(id) {
    return this.afDB.object('projects/'+ id);
  } 
  public addMemberProject(member,id){
      console.log(member)
     this.afDB.database.ref('projects/'+id+'/members/').push(member)
  }
  public getMembers(id,membersProject){
    return this.afDB.list('projects/'+id+'/members/')
  }
}

