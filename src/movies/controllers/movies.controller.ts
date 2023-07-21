import { Controller, Get, Param, Inject } from '@nestjs/common';
import di from '../di';
import { MoviesService } from '../services/movies.service';
import { MovieDto } from '../dto/movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(
    @Inject(di.MOVIES_SERVICE)
    private moviesService: MoviesService,
  ) {}

  @Get(':title')
  findByTitle(@Param('title') title: string): MovieDto {
    return this.moviesService.findMovieByTitle(title);
  }
}
