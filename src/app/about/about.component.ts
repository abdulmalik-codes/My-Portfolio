import { Component, OnInit } from '@angular/core';
import { skills } from './skills.service';

@Component({
  selector: 'portfolio-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  passion: string[] = [
    `I'm Abdul-Malik Mohamed, a goal-driven individual who strives to achieve my goals.
    I push through my challenges with patience and I try my best to display what lies within my heart
     by my actions. I will go above and beyond when asked to lend a hand. I try to vibrate positive
     energy with everybody I meet, I believe that the energy you give is the energy you get.
     On a personal level, I'm an outdoors person, who is a Thalassophile and a Montivagent by heart,
     so I love walking on mountains and ending up at the sea.
     I completed a networking course in 2020 and got a taste of the IT industry.
     While learning about how networks pinged through to other networks,
     I wondered what makes up the information we were pinging through and how that content was created,
      and that is where my interest in programming and web development began.
      This curiosity lead me to where I am today.`,
  ];

  constructor(private skillService: skills) {}

  skills: string[] = [];

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
  }

  onDownloadCv() {
    alert(
      `CV under construction, send me an email to abdul.malik.codes@gmail.com to get an old copy`
    );
  }
}
