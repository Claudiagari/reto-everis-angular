import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  projects = null;
  constructor(private projectsService:ProjectsService) {
    projectsService.getProjects()
     .valueChanges().subscribe( projects =>{
       this.projects = projects;
     })
    }
}
