import { Injectable } from '@angular/core';
import { Resume } from './resume.model';

@Injectable({ providedIn: 'root' })
export class EducationService {
  private education: Resume[] = [
    {
      title: 'Matric',
      year: `<i class="far fa-calendar-alt"></i> 2017`,
      location: `<i class="fas fa-school"></i> Livingstone High School`,
      description:
        'I started at LHS in grade 8, in 2013 and did secular studies, one of my subjects was Art.',
    },

    {
      title: 'Hifth',
      year: `<i class="far fa-calendar-alt"></i> 2018-2019`,
      location: `<i class="fas fa-school"></i>Madrasatul Ahlil Quraan`,
      description:
        'I memorized some chapters of the Quraan, did a study of Arabic grammar and morphology and some translation of Arabic to English.',
    },

    {
      title: 'Networking',
      year: `<i class="far fa-calendar-alt"></i> 2020`,
      location: `<i class="fas fa-university"></i>College of Cape Town`,
      description:
        'I completed the IT essentials course (ITE) and completed the Cisco Certified Network Associate course (CCNA).',
    },

    {
      title: 'Web Developement',
      year: `<i class="far fa-calendar-alt"></i> 2021`,
      location: `<i class="fas fa-university"></i>Life Choices Coding Academy`,
      description:
        'I upskilled myself in coding. Languages included HTML, CSS, JAVASCRIPT and PYTHON.',
    },
  ];

  getEducation() {
    return this.education.slice();
  }
}
