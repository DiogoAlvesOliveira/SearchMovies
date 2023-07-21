export class MovieDto {
  title: string;
  actors: string;
  poster: string;
  plot: string;

  constructor(attrs?: {
    title: string;
    actors: string;
    poster: string;
    plot: string;
  }) {
    if (attrs) {
      Object.assign(this, attrs);
    }
  }
}
