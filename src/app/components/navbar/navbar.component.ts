import { Component, OnInit } from '@angular/core';
import {PROJECTS} from '../../mocks/projects';
import { Project } from '../../classes/project';

import { User } from '../../classes/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  projects: Project[];
  brandImageUrl: string;
  user: User;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.projects = PROJECTS;
    this.brandImageUrl = "http://via.placeholder.com/109x40";
    this.user = this.authenticationService.user;
  }

}
