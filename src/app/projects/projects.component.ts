import { Component, OnInit } from '@angular/core';
import { Projects } from './projects.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  showModal: boolean = false;
  projects: Projects[] = [];
  javascript: boolean = false;
  htmlCss: boolean = false;
  python: boolean = false;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

  show() {
    this.showModal = true; // Show-Hide Modal Check
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  showJS() {
    for (let project of this.projects) {
      if (project.techStack == 'JavaScript') {
        console.log('clicked');

        this.javascript = true;
      }
    }
  }

  showHtmlCss() {
    for (let project of this.projects) {
      if (project.techStack == 'HTML/CSS') {
        console.log('clicked');

        this.htmlCss = true;
      }
    }
  }

  showPython() {
    for (let project of this.projects) {
      if (project.techStack == 'Python') {
        console.log('clicked');

        this.python = true;
      }
    }
  }

  // showTechStack() {
  //   for (let project of this.projects) {
  //     const showJS = () => {
  //       if (project.techStack == 'JavaScript') {
  //         this.javascript = true;
  //       }
  //       return showJS;
  //     };

  //     const showHtmlCss = () => {
  //       if (project.techStack == 'HTML/CSS') {
  //       }
  //     };

  //     const showPython = () => {
  //       if (project.techStack == 'Python') {
  //       }
  //     };
  //   }
  // }
}
