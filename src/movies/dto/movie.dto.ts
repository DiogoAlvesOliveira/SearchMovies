export class MovieDto {
  title: string;
  actors: string;
  poster: string;
  plot: string;
  isFavorite: boolean;

  constructor(attrs?: {
    title: string;
    actors: string;
    poster: string;
    plot: string;
    isFavorite: boolean;
  }) {
    if (attrs) {
      Object.assign(this, attrs);
    }
  }
}
