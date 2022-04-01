import { Injectable } from '@angular/core';
import { Resume } from './resume.model';

@Injectable({ providedIn: 'root' })
export class EducationService {
  private education: Resume[] = [
    {
      title: 'Matric',
      year: `2017`,
      location: `Livingstone High School`,
      description:
        'I started at LHS in grade 8, in 2013 and did secular studies, one of my subjects was Art.',
    },

    {
      title: 'Hifth',
      year: `2018-2019`,
      location: `Madrasatul Ahlil Quraan`,
      description:
        'I memorized some chapters of the Quraan, did a study of Arabic grammar and morphology and some translation of Arabic to English.',
    },

    {
      title: 'Networking',
      year: `2020`,
      location: `College of Cape Town`,
      description:
        'I completed the IT essentials course (ITE) and completed the Cisco Certified Network Associate course (CCNA).',
    },

    {
      title: 'Web Developement',
      year: `2021`,
      location: `Life Choices Coding Academy`,
      description:
        'I upskilled myself in coding. Languages included HTML, CSS, JAVASCRIPT and PYTHON.',
    },

    {
      title: 'Angular Development',
      year: `2022`,
      location: `Rain SA`,
      description:
        'During my internship at rain I learnt a JavaScript framework called Angular',
    },

    {
      title: 'Abdul-Malik Mohamed',
      year: `2000-present`,
      location: `End of my Education`,
      description: 'Click on the suitcase to check out my work experience',
    },
  ];

  getEducation() {
    return this.education.slice();
  }
}

@Injectable({ providedIn: 'root' })
export class WorkService {
  private work: Resume[] = [
    {
      title: 'Casual Worker',
      year: `2015`,
      location: `Mitchell's Butchery`,
      description:
        'I was responsible for a number of tasks including packing freezers, putting products into packaging and onto shelfs, serving customers, packing of products for customers and delivering of products.',
    },
    {
      title: 'Waiter',
      year: `2016–2021`,
      location: `DALVIES/SPREME`,
      description:
        'Mainly décor of venue. Providing excellent wait service to ensure client satisfaction. Delivering of food and beverages to guests and share additional information about the company and what they stand for. Cleaning up after event.',
    },

    {
      title: 'Assistant Photographer',
      year: `2016–2020`,
      location: `TIME PHOTOGRAPHY`,
      description:
        'I assisted in the use of photographic equipment to capture events, objects and people. Which aslo included setting up lights, stands and props, and I frequently acted as a second shooter.',
    },

    {
      title: 'Events Promotor/Usher',
      year: `2016-2019`,
      location: `KHUDAAMUL ISLAAM`,
      description:
        'A main focus was generating sales prospects and increasing customer acquisition levels. Directing audience to rest rooms and refreshment stations. Maintaining the entrance area clean and ejecting audience who are causing trouble.',
    },

    {
      title: 'Workshop Assistant',
      year: `2016-2021`,
      location: `QAT MOTORS`,
      description:
        'I assisted with servicing of vehicles, packing tools and keeping work area clean. I picked up and delivered vehicles, and also picked up parts needed for cars being serviced.',
    },

    {
      title: 'Route Marshal',
      year: `2020`,
      location: `CAPE ARGUS BICYCLE TOUR`,
      description:
        'On my end I had to ensure that everything is running smoothly. To guide riders, ease their experience, help them avoid any difficulties and help them safely find their way around the course.',
    },

    {
      title: 'Slaughterer',
      year: `2018–Present`,
      location: `SUNRISE FARM`,
      description: "For 4 days of the year I'm a part time butcher on a farm.",
    },

    {
      title: 'Web Apps Intern',
      year: `2021-2022`,
      location: `LC Studio`,
      description:
        'After completing my 6 month web development course I started my internship at LC Studio which mainly focused on upskilling myself and transitioning from an education background to a work environment, whilst self promoting and looking for external opportunities.',
    },

    {
      title: 'Angular Developer Intern',
      year: `2022`,
      location: `Rain SA`,
      description: 'Small angular projects at the moment',
    },

    {
      title: 'Abdul-Malik Mohamed',
      year: `2000-present`,
      location: `End of my Work Experience`,
      description: 'Click on the medal to check out my self development',
    },
  ];

  getWork() {
    return this.work.slice();
  }
}

@Injectable({ providedIn: 'root' })
export class DevelopmentService {
  private development: Resume[] = [
    {
      title: 'Brown Belt',
      year: `2005-2012`,
      location: `Colorado Park Dojo`,
      description:
        'I did Kyokushin Karate, a full-contact martial art. It is a style of stand-up fighting and is rooted in a philosophy of self-improvement, discipline and hard training. Our dojo mainly focused on using our knowledge for self defense.',
    },

    {
      title: 'Forward',
      year: `2007-present`,
      location: `Rangers Rugby Club`,
      description:
        'My role in the team often changed due to my physical form, my positions which always remained in the starting 8 went from prop to hooker to flank to eightman. My physical form changed my position but my mental state and heart for the game always pushed me to persevere and play the full 80 minutes.',
    },

    {
      title: 'All Rounder/ Wicket Keeper',
      year: `2011-2015`,
      location: `MP Eagles Cricket Club`,
      description:
        'When out in the field I was the wicket keeper but also a spin bowler and when we batted I came in 5th.',
    },

    {
      title: 'Volunteer',
      year: `2016 – present`,
      location: `Various NPOs`,
      description:
        'I would do community services such as soup kitchens, volunteering to set up for events and serve food at breakfasts, lunches and suppers. I would also help out at youth programs. Different places includes Masjidul-Wadood, AMR Youth, MP Youth, A 2 Z Helping Hands',
    },
    {
      title: 'Abdul-Malik Mohamed',
      year: `2000-present`,
      location: `End of my self development section`,
      description: 'Scroll down to see some of my skills',
    },
  ];

  getDevelopment() {
    return this.development.slice();
  }
}
