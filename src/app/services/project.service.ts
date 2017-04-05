import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
  projects = [
    {name: 'Project 1'}
  ];
  constructor() { }

  fetchAll() {
    return this.projects;
  }

  addProject(project: any) {
    this.projects.push(project);
  }
}
