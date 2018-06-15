import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Router } from "@angular/router";

@Injectable()
export class MembersService{
  members:any={}
  projects:any={}
  constructor(private afDB:AngularFireDatabase, private router:Router){
  }
    public getMembers(){
      return this.afDB.list('members/')
    }
    public saveMember(member){
      console.log(member)
      this.afDB.database.ref('members/'+member.id).set(member)
      this.router.navigate(['home'])
    }
  }