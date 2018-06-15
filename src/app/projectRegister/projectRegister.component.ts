import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { MembersService } from '../services/members.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projectRegister',
  templateUrl: './projectRegister.component.html'
})
export class ProjectRegisterComponent {
  project: any = {}
  member: any = {}
  members = null
  id: any = null
  constructor(private route: ActivatedRoute, private projectsService: ProjectsService, private memberService: MembersService, private router:Router) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.memberService.getMembers()
      .valueChanges().subscribe((members) => {
        this.members = members
      })
    if (this.id != 'new') {
      this.projectsService.updateProject(this.id)
        .valueChanges().subscribe((project) => {
          this.project = project;
        });
    }
  }
  saveProject() {
    if (this.id != 'new') {
      this.projectsService.editProject(this.project);
      alert('Proyecto editado con éxito!');
    } else {
      this.project.id = Date.now()
      this.projectsService.saveProject(this.project)
      alert('Se registro proyecto con éxito!')
    }
    this.project = {};
  }


}