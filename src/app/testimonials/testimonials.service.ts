import { Injectable } from '@angular/core';
import { Testimonials } from './tesimonials.model';

@Injectable({ providedIn: 'root' })
export class TestimonialsService {
  private testimonials: Testimonials[] = [
    {
      img: '../../assets/testimonials/Thapelo.png',
      imgAlt: 'Picture of Thapelo',
      name: 'Thapelo Tsotetsi',
      title: 'Back End Developer/Lecturer',
      message:
        'Abdul-Malik is a brilliant student who is always willing to learn more. He has great personality and communication skills. Abdul-Malik also has a skill of being able to learn new tools quickly. I highly recommend him for a Junior Full-stack position.',
    },
    {
      img: '../../assets/testimonials/Uthmaan.png',
      imgAlt: 'Picture of Uthmaan',
      name: 'Uthmaan Breda',
      title: 'Colleague',
      message:
        ' A cool dude. He knows his priorities, is hard working and driven. ',
    },

    {
      img: '../../assets/testimonials/Masi.png',
      imgAlt: 'Picture of Masi',
      name: 'Masimthembe Ndaloenie',
      title: 'Colleague',
      message:
        ' Purpose driven person who knows what he wants and fully strives for excellence.',
    },

    {
      img: '../../assets/testimonials/Candice.png',
      imgAlt: 'Picture of Candice',
      name: 'Candice Amon',
      title: 'Facilitator',
      message:
        'Has a very confident and respectful nature. Leads by example by walking the talk. Has a very open mindset and is not afraid to ask for help when needed. He is very open to feedback to improve in every aspect. I recommend him for his good work ethics.',
    },

    {
      img: '../../assets/testimonials/Justin.png',
      imgAlt: 'Picture of Justin',
      name: 'Justin Calvert',
      title: 'Colleague',
      message: 'Abdul-Malik is a very helpful person and a hardworker.',
    },

    {
      img: '../../assets/testimonials/Jason.png',
      imgAlt: 'Picture of Jason',
      name: 'Jason Wandrag',
      title: 'Front End Developer/Lecturer',
      message:
        'Abdul-Malik has a great work ethic and honorable character. He grasps concepts quickly, and does not hesitate to implement what he has learnt with himself and others around him.',
    },

    {
      img: '../../assets/testimonials/Aaliyah.png',
      imgAlt: 'Picture of Aaliyah',
      name: 'Aaliyah Jardine',
      title: 'Colleague',
      message:
        'Abdul-Malik carries himself with good energy and is a real go getter. He always goes out of his way to help others. Definitely someone you can count on and look up to.',
    },

    {
      img: '../../assets/testimonials/Thapelo.png',
      imgAlt: 'Picture of Thapelo',
      name: 'Thapelo Tsotetsi',
      title: 'Back End Developer/Lecturer',
      message:
        'Abdul-Malik is a brilliant student who is always willing to learn more. He has great personality and communication skills. Abdul-Malik also has a skill of being able to learn new tools quickly. I highly recommend him for a Junior Full-stack position.',
    },
  ];

  getTestimonials() {
    return this.testimonials.slice();
  }
}
