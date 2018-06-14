import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  id = null;
  project: any = {};
  constructor(private route: ActivatedRoute, private projectsService:ProjectsService) {
    this.id = this.route.snapshot.params['id'];
    this.projectsService.getProject(this.id)
    .valueChanges().subscribe((project)=>{
                    this.project = project;
                    console.log(project)
                });
  }
}