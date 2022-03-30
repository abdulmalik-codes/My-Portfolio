export class Projects {
  constructor(
    public imgURL: string,
    public imgALT: string,
    public title: string,
    public techStack: string,
    public description: string,
    public githubURL: string,
    public liveProjectURL: string,
    public id: string
  ) {
    this.imgURL = imgURL;
    this.imgALT = imgALT;
    this.title = title;
    this.techStack = techStack;
    this.description = description;
    this.githubURL = githubURL;
    this.liveProjectURL = liveProjectURL;
    this.id = id;
  }
}
