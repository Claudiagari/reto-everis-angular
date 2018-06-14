import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class MembersService{
  members:any={}
  projects:any={}
  constructor(private afDB:AngularFireDatabase){
  }
    public getMembers(){
      return this.afDB.list('/projects/members')
    }
    public saveMember(member){
      console.log(member)
      this.afDB.database.ref('projects/'+member.id).set(member)
    }
  }