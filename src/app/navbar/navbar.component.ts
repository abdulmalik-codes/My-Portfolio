import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  constructor() {}

  ngOnInit(): void {}
}
