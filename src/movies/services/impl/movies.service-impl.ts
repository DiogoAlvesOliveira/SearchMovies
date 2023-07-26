import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { HttpService } from '@nestjs/axios';
import { MovieDto } from '../../dto/movie.dto';
import { MoviesService } from '../movies.service';
import { firstValueFrom } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMovie } from 'src/movies/entities/user-movie.entity';
import { Repository } from 'typeorm';
import { UserMovieDto } from 'src/movies/dto/user-movie.dto';

@Injectable()
export class MoviesServiceImpl implements MoviesService {
  private readonly SEND_API_URL = process.env.SEND_API_URL;

  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(UserMovie)
    private repo: Repository<UserMovie>,
  ) {}
  async findByUser(name: string, password: string) {
    name = name.toUpperCase();
    try {
      const user: UserMovie[] = await this.repo.findBy({ name });
      if (user.length < 1) {
        return await this.createUser(name, password);
      }
      return password === user[0].password
        ? await this.userMovieDtoMapper(user[0])
        : null;
    } catch {
      throw new Error('Error ao encontrar usuário.');
    }
  }

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

  async createUser(name: string, password: string) {
    let user = await this.repo.create({
      name: name,
      password: password,
    });
    user = await this.repo.save(user);

    return await this.userMovieDtoMapper(user);
  }

  async userMovieDtoMapper(user: UserMovie): Promise<UserMovieDto> {
    const userDto: UserMovieDto = new UserMovieDto();
    userDto.name = user.name;
    userDto.id = user.id;
    userDto.token = await this.generateToken(user.name);

    return userDto;
  }

  async generateToken(name: string): Promise<string> {
    const token: string = jwt.sign({ name: name }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return token;
  }
}
