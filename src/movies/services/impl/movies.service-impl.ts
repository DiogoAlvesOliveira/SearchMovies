import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { MovieDto } from '../../dto/movie.dto';
import { MoviesService } from '../movies.service';
import { firstValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { FavoriteMovie } from 'src/movies/entities/favorite-movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFavoriteMovieDto } from 'src/movies/dto/create-favorite-movie.dto';

@Injectable()
export class MoviesServiceImpl implements MoviesService {
  private readonly SEND_API_URL = process.env.SEND_API_URL;

  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(FavoriteMovie)
    private repo: Repository<FavoriteMovie>,
  ) {}
  async findByFavorite(title: string) {
    return await this.repo.findBy({ title });
  }

  async create(createFavoriteDto: CreateFavoriteMovieDto) {
    const favoriteMovie = this.repo.create({
      title: createFavoriteDto.title,
    });

    await this.repo.save(favoriteMovie);
    return favoriteMovie;
  }

  async findMovieByTitle(title: string) {
    const urlMovie = this.SEND_API_URL + title;
    const { data } = await firstValueFrom(
      this.httpService.get<MovieDto>(urlMovie),
    );
    const dto: MovieDto = await this.jsonToDto(data);

    return dto;
  }

  remove(title: string) {
    return this.repo.delete({ title });
  }

  async jsonToDto(data: any): Promise<MovieDto> {
    const dto: MovieDto = new MovieDto();
    const favoriteDto = await this.findByFavorite(data.Title);

    dto.title = data.Title;
    dto.actors = data.Actors;
    dto.plot = data.Plot;
    dto.poster = data.Poster;
    dto.isFavorite = favoriteDto.length > 0 ? true : false;

    return dto;
  }
}
