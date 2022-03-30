import { Injectable } from '@angular/core';
import { Projects } from './projects.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projects: Projects[] = [
    {
      imgURL: '../../assets/projects/timeline.png',
      imgALT: 'My Timeline',
      title: 'Timeline',
      techStack: 'HTML/CSS',
      description:
        'A timeline of work experience using AOS(Animate On Scroll).',
      githubURL: 'https://github.com/abdul-malik360/My_Timeline',
      liveProjectURL: 'https://youthful-ride-5ab649.netlify.app/',
      id: 'timeline',
    },
    {
      imgURL: '../../assets/projects/contact_form.png',
      imgALT: 'A contact form',
      title: 'Contact Form',
      techStack: 'HTML/CSS',
      description: 'A contact form using Glassmorphism.com and Formspree.',
      githubURL: 'https://github.com/abdul-malik360/Contact_Form',
      liveProjectURL: 'https://pensive-jepsen-852132.netlify.app/',
      id: 'contact-form',
    },
    {
      imgURL: '../../assets/projects/calculator_app.png',
      imgALT: 'A javascript calculator',
      title: 'Calculator',
      techStack: 'JavaScript',
      description: 'A calculator created using Javascript.',
      githubURL: 'https://github.com/abdul-malik360/jscalculator',
      liveProjectURL: 'https://gallant-jackson-9fbc52.netlify.app/',
      id: 'js-calculator',
    },
    {
      imgURL: '../../assets/projects/adding_numbers.png',
      imgALT: 'A BMI Calculator',
      title: 'BMI Calculator',
      techStack: 'Python',
      description:
        'A body mass index calculator to calculate the ideal weight of a male or female using their weight, height, gender and age.',
      githubURL:
        'https://github.com/abdul-malik360/BMI_Calculator/blob/main/BMI_Calculator.py',
      liveProjectURL:
        'https://replit.com/@abdulmalik360/BMICalculator#BMI_Calculator.py',
      id: 'bmi-calculator',
    },
    {
      imgURL: '../../assets/projects/sneaker_site.png',
      imgALT: 'A sneaker site',
      title: 'Sneaker Site',
      techStack: 'HTML/CSS',
      description:
        'One of my first websites, a sneaker site implementing the basics of a website.',
      githubURL: 'https://github.com/abdul-malik360/Sneaker_Site',
      liveProjectURL: 'https://affectionate-bose-3983db.netlify.app/',
      id: 'sneaker-site',
    },
    {
      imgURL: '../../assets/projects/weather_app.png',
      imgALT: 'A Weather app',
      title: 'A Weather app',
      techStack: 'Python',
      description:
        'A weather application that fetches data from a weather api by inserting a location into its input box.',
      githubURL:
        'https://github.com/abdul-malik360/requests/blob/main/challenge.py',
      liveProjectURL: 'https://replit.com/@abdulmalik360/requests#challenge.py',
      id: 'weather-app',
    },
    {
      imgURL: '../../assets/projects/testimonials.png',
      imgALT: 'A testimonial slider',
      title: 'Testimonials',
      techStack: 'HTML/CSS',
      description:
        'A testimonial slider using a jQuery plugin called OWL Carousel.',
      githubURL: 'https://github.com/abdul-malik360/my_testomonials',
      liveProjectURL: 'https://confident-poincare-1690a0.netlify.app/',
      id: 'testimonial-slider',
    },
    {
      imgURL: '../../assets/projects/bmi_calculator.png',
      imgALT: 'An Addition Calculator',
      title: 'Addition Calculator',
      techStack: 'Python',
      description: 'A basic python calculator that adds two numbers.',
      githubURL:
        'https://github.com/abdul-malik360/tkinter/blob/main/GUI_Task.py',
      liveProjectURL: 'https://replit.com/@abdulmalik360/tkinter#GUI_Task.py',
      id: 'adding-app',
    },
    {
      imgURL: '../../assets/projects/projects_card.png',
      imgALT: 'A projects card',
      title: 'Projects Card',
      techStack: 'HTML/CSS',
      description:
        'A Project Card with links to all my completed projects using Glassmorphism.com.',
      githubURL: 'https://github.com/abdul-malik360/project_card',
      liveProjectURL: 'https://hardcore-minsky-0c2f2a.netlify.app/',
      id: 'projects-card',
    },
    {
      imgURL: '../../assets/projects/temperature_converter.png',
      imgALT: 'A Temperature Converter',
      title: 'Temperature Converter',
      techStack: 'Python',
      description:
        'A temperature converter app that converts temperatures from fahrenheit to celcius and vice versa.',
      githubURL:
        'https://github.com/abdul-malik360/temperature_converter/blob/main/temp_converter-task.py',
      liveProjectURL:
        'https://replit.com/@abdulmalik360/Temperature-Converter#main.py',
      id: 'temp-converter',
    },
    {
      imgURL: '../../assets/projects/patient_app.png',
      imgALT: 'A patient app',
      title: 'Sick Patient App',
      techStack: 'Python',
      description:
        'A patient app that tells patients how much their treatment will cost.',
      githubURL:
        'https://github.com/abdul-malik360/Creating_a_class/blob/main/oop_task.py',
      liveProjectURL:
        'https://replit.com/@abdulmalik360/Creatingaclass#oop_task.py',
      id: 'patient-app',
    },
    {
      imgURL: '../../assets/projects/pokedex.png',
      imgALT: 'A Pokedex',
      title: 'Pokedex',
      techStack: 'JavaScript',
      description:
        'A Pokemon Index that catalogues and provides information regarding the various species of Pokemon.',
      githubURL: 'https://github.com/abdul-malik360/Pokedex',
      liveProjectURL: 'https://naughty-kowalevski-9438ab.netlify.app/',
      id: 'pokedex',
    },
    {
      imgURL: '../../assets/projects/error_handling_app.png',
      imgALT: '',
      title: 'Error Handling',
      techStack: 'Python',
      description:
        'An app that checks if you saved up enough money to qualify you for a trip.',
      githubURL:
        'https://github.com/abdul-malik360/Error_Handling/blob/main/task.py',
      liveProjectURL: 'https://replit.com/@abdulmalik360/ErrorHandling#task.py',
      id: 'error-handling',
    },

    {
      imgURL: '../../assets/projects/lotto_app.png',
      imgALT: '',
      title: 'Lotto App',
      techStack: 'Python',
      description:
        'A game for users to pick 6 random numbers 3 times to see if they won any prizes.',
      githubURL: 'https://github.com/abdul-malik360/Lotto_App',
      liveProjectURL: 'https://replit.com/@abdulmalik360/LottoApp#main.py',
      id: 'lotto-app',
    },

    {
      imgURL: '../../assets/projects/ethereal_fungus.png',
      imgALT: 'Nishaat Williams Portfolio',
      title: 'Ethereal Fungus',
      techStack: 'HTML/CSS',
      description: "An Animation student's portfolio.",
      githubURL: 'https://github.com/abdul-malik360/Portfolio-Roopen',
      liveProjectURL: 'https://etherealfungus.netlify.app/',
      id: 'Nishaat-portfolio',
    },

    {
      imgURL: '../../assets/projects/QAT_motors.png',
      imgALT: 'QAT Motors',
      title: 'QAT Motors Website',
      techStack: 'JavaScript',
      description:
        'A website for clients of Qat Motors to view their services and contact information and also to sign up and register to book in their vehicles.',
      githubURL: 'https://github.com/abdul-malik360/Final_Project-Frontend',
      liveProjectURL: 'https://qat-motors.netlify.app/',
      id: 'Qat-Motors',
    },

    {
      imgURL: '../../assets/projects/my_pos.png',
      imgALT: 'MyPOS',
      title: 'MyPOS',
      techStack: 'JavaScript',
      description:
        'MyPOS is an ecomerce website for customers to add food to their cart and order online.',
      githubURL: 'https://github.com/abdul-malik360/Javascript_EOMP',
      liveProjectURL: 'https://optimistic-benz-002fcf.netlify.app/',
      id: 'MyPOS',
    },

    {
      imgURL: '../../assets/projects/countdown_timer.png',
      imgALT: 'A picture of my count down timer app',
      title: 'Count Down Timer',
      techStack: 'JavaScript',
      description:
        "A count down timer app that allows it's users to enter a date and the outcome will count down till the entered date.",
      githubURL: 'https://github.com/abdul-malik360/Count-down-app',
      liveProjectURL: 'https://my-count-down-timer-app.netlify.app/',
      id: 'count-down-app',
    },
  ];

  getProjects() {
    return this.projects.slice();
  }

  getTechStack() {
    // return this.projects.slice
  }
}
