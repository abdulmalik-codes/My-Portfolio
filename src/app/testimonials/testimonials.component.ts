import { Component, OnInit } from '@angular/core';
import { Testimonials } from './tesimonials.model';
import { TestimonialsService } from './testimonials.service';

@Component({
  selector: 'portfolio-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonials[] = [];
  constructor(private testimonialsService: TestimonialsService) {}

  ngOnInit(): void {
    this.testimonials = this.testimonialsService.getTestimonials();
  }
}
