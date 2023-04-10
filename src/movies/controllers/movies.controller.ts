import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import di from '../di';
import { MoviesService } from '../services/movies.service';
import { MovieDto } from '../dto/movie.dto';
import { CreateFavoriteMovieDto } from '../dto/create-favorite-movie.dto';
import { title } from 'process';

@Controller('movies')
export class MoviesController {
  constructor(
    @Inject(di.MOVIES_SERVICE)
    private moviesService: MoviesService,
  ) {}

  @Post()
  create(@Body() createFavoriteDto: CreateFavoriteMovieDto) {
    return this.moviesService.create(createFavoriteDto);
  }

  @Get('favorite/:title')
  findByFavorite(@Param('title') title: string) {
    return this.moviesService.findByFavorite(title);
  }

  @Get(':title')
  findByTitle(@Param('title') title: string): MovieDto {
    return this.moviesService.findMovieByTitle(title);
  }

  @Delete('delete/:title')
  remove(@Param('title') title: string) {
    return this.moviesService.remove(title);
  }
}
