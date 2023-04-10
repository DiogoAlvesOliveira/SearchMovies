import { CreateFavoriteMovieDto } from '../dto/create-favorite-movie.dto';

export interface MoviesService {
  create(createFavoriteDto: CreateFavoriteMovieDto);
  findMovieByTitle(title: string);
  remove(title: string);
  findByFavorite(title: string);
}
