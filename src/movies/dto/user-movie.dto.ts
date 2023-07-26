export class UserMovieDto {
  id: string;
  name: string;
  token: string;

  constructor(attrs?: { id: string; name: string; token: string }) {
    if (attrs) {
      Object.assign(this, attrs);
    }
  }
}
