import { Component, OnInit } from '@angular/core';
import { EducationService } from '../education.service';
import { Resume } from '../resume.model';

@Component({
  selector: 'portfolio-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor(private educationService: EducationService) {}
  education = true;
  work = false;
  experience = false;

  educations: Resume[] = [];

  ngOnInit(): void {
    this.educations = this.educationService.getEducation();
  }

  dataEducation = [
    {
      name: 'abdul Education',
      age: 22,
    },
    {
      name: 'malik Education',
      age: 30,
    },
    {
      name: 'abdul Education',
      age: 22,
    },
    {
      name: 'malik Education',
      age: 30,
    },
    {
      name: 'abdul Education',
      age: 22,
    },
    {
      name: 'malik Education',
      age: 30,
    },
  ];

  data = [
    {
      name: 'abdul work',
      age: 22,
    },
    {
      name: 'malik work',
      age: 30,
    },
  ];

  dataOther = [
    {
      name: 'abdul experience',
      age: 22,
    },
    {
      name: 'malik experience',
      age: 30,
    },
  ];

  onEducation() {
    this.education = true;
    this.experience = false;
    this.work = false;
  }

  onWork() {
    this.work = true;
    this.experience = false;
    this.education = false;
  }

  onExperience() {
    this.experience = true;
    this.work = false;
    this.education = false;
  }
}
