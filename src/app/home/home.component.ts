import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  greetings: string[] = [
    'Hi',
    //  'السَّلَامُ عَلَيْكُمْ'
  ];
  names: string[] = [
    'Abdul-Malik',
    // 'عبد الملك'
  ];
  messages: string[] = [
    'an Aspiring Angular Developer.',
    // "based in Mitchell's Plain, Cape Town.",
    // 'Excited to meet YOU!',
  ];

  constructor() {}

  ngOnInit(): void {}
}
