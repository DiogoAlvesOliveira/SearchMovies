import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { MovieDto } from '../../dto/movie.dto';
import { MoviesService } from '../movies.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MoviesServiceImpl implements MoviesService {
  private readonly SEND_API_URL = process.env.SEND_API_URL;

  constructor(private readonly httpService: HttpService) {}

  async findMovieByTitle(title: string) {
    const urlMovie = this.SEND_API_URL + title;
    const { data } = await firstValueFrom(
      this.httpService.get<MovieDto>(urlMovie),
    );
    const dto: MovieDto = await this.jsonToDto(data);

    return dto;
  }
  async jsonToDto(data: any): Promise<MovieDto> {
    const dto: MovieDto = new MovieDto();
    dto.title = data.Title;
    dto.actors = data.Actors;
    dto.plot = data.Plot;
    dto.poster = data.Poster;

    return dto;
  }
}
