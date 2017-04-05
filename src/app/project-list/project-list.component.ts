import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component( {
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: [ './project-list.component.css' ]
} )
export class ProjectListComponent implements OnInit {
  projects;

  constructor( private projectService: ProjectService ) {
  }

  ngOnInit() {
    this.updateProjects();
    setTimeout(() => {
      this.projectService.addProject({name: 'New Project'});
      this.updateProjects();
    }, 1000);
  }

  updateProjects() {
    this.projects = this.projectService.fetchAll();
  }

}
