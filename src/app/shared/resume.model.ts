export class Resume {
  constructor(
    public title: string,
    public year: string,
    public location: string,
    public description: string
  ) {
    this.title = title;
    this.year = year;
    this.location = location;
    this.description = description;
  }
}
