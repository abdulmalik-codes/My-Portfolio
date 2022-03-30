import { Component, OnInit } from '@angular/core';
import {
  DevelopmentService,
  EducationService,
  WorkService,
} from './resume.service';
import { Resume } from './resume.model';

@Component({
  selector: 'portfolio-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  constructor(
    private educationService: EducationService,
    private workService: WorkService,
    private developmentService: DevelopmentService
  ) {}
  educationSelected = true;
  workSelected = false;
  experienceSelected = false;

  educationExperience: Resume[] = [];
  workExperience: Resume[] = [];
  developmentExperience: Resume[] = [];

  ngOnInit(): void {
    this.educationExperience = this.educationService.getEducation();
    this.workExperience = this.workService.getWork();
    this.developmentExperience = this.developmentService.getDevelopment();
  }

  onEducation() {
    this.educationSelected = true;
    this.experienceSelected = false;
    this.workSelected = false;
  }

  onWork() {
    this.workSelected = true;
    this.experienceSelected = false;
    this.educationSelected = false;
  }

  onExperience() {
    this.experienceSelected = true;
    this.workSelected = false;
    this.educationSelected = false;
  }
}
