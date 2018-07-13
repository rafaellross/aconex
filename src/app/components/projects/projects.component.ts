import { Component, OnInit } from '@angular/core';
import {PROJECTS} from '../../mocks/projects';
import { Project } from '../../classes/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  
  constructor() { }

  ngOnInit() {
    this.projects = PROJECTS;
  }

}
