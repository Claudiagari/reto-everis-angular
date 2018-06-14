import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projectRegister',
  templateUrl: './projectRegister.component.html'
})
export class ProjectRegisterComponent {
 project:any={}
 constructor(private projectsService:ProjectsService){
 }
 saveProject(){
   this.projectsService.saveProject(this.project)
 }
}