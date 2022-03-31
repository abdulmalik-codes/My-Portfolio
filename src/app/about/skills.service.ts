import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class skills {
  private skills = [
    `<i class="fab fa-html5"></i>`,
    `<i class="fab fa-css3-alt"></i>`,
    `<i class="fab fa-js-square"></i>`,
    `<i class="fab fa-python"></i>`,
    `<i class="devicon-mysql-plain"></i>`,
    `<i class="devicon-sqlite-plain"></i>`,
    `<i class="devicon-flask-original"></i>`,
    `<i class="devicon-vuejs-plain"></i>`,
    `<i class="devicon-angularjs-plain"></i>`,
  ];

  getSkills() {
    return this.skills.slice();
  }
}

// <i class="icon fab fa-html5"> HTML </i>
// <i class="icon fab fa-css3-alt"> CSS </i>
// <i class="icon fab fa-js-square"> JavaScript </i>
// <i class="icon fab fa-python"> Python </i>
// <i class="icon devicon-mysql-plain"> MySQL </i>
// <i class="icon devicon-sqlite-plain"> SQLite </i>
// <i class="icon devicon-flask-original"> Flask </i>
// <i class="icon devicon-vuejs-plain"> Vue.js </i>
// <i class="icon devicon-angularjs-plain"> Angular </i>
