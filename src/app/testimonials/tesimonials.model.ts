export class Testimonials {
  constructor(
    public img: string,
    public imgAlt: string,
    public name: string,
    public title: string,
    public message: string
  ) {
    this.img = img;
    this.imgAlt = imgAlt;
    this.name = name;
    this.title = title;
    this.message = message;
  }
}
