import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { MembersService } from '../services/members.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  id = null;
  project: any = {};
  member:any={}
  members=null
  projects=null
  optionSelection: string  = '0';
  membersProject=null
  constructor(private route: ActivatedRoute, private projectsService: ProjectsService, private memberService:MembersService , private afDB: AngularFireDatabase) {
    this.id = this.route.snapshot.params['id'];
    this.projectsService.getProject(this.id)
      .valueChanges().subscribe((project) => {
        this.project = project;
        console.log(project)
      });
    this.memberService.getMembers() 
    .valueChanges().subscribe((members)=>{
        this.members = members
        console.log(members)
    })
    this.projectsService.getMembers(this.id,this.membersProject) 
    .valueChanges().subscribe((membersProject)=>{
        this.membersProject = membersProject
        console.log(this.afDB.database.ref('projects/'+this.id+'/members/').once('value'))
       console.log(membersProject)
       membersProject.forEach(element => {
         console.log(element)
       });
    })
  }
  addMemberProject(){
    this.member = this.optionSelection
      this.projectsService.addMemberProject(this.member,this.id)
      console.log(this.member,this.id)
    alert('Se agrego miembro del proyecto con exito')
  }
}