import { Component, OnInit } from '@angular/core';
import {PROJECTS} from '../../mocks/projects';
import { Project } from '../../classes/project';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  projects: Project[];
  brandImageUrl: string;
  constructor() { }

  ngOnInit() {
    this.projects = PROJECTS;
    this.brandImageUrl = "http://via.placeholder.com/109x40";
  }

}
