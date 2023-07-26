export interface MoviesService {
  findMovieByTitle(title: string);
  findByUser(name: string, password: string);
}
