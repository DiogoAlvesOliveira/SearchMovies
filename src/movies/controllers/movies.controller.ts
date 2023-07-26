import { Controller, Get, Param, Inject, Post, Req, Res } from '@nestjs/common';
import di from '../di';
import { Request, Response } from 'express';
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

  @Post('/login')
  async login(@Req() request: Request, @Res() response: Response) {
    const name: string = request.body.name;
    const password: string = request.body.password;

    if (!name || !password) {
      return response.status(400).json({
        errors: ['Usuário e senha são obrigatórios'],
      });
    }
    try {
      const user = await this.moviesService.findByUser(name, password);
      return user != null
        ? response.status(200).json({
            user: user.name,
            token: user.token,
          })
        : response.status(401).json({
            errors: [`Usuário não autorizado ${name}.`],
          });
    } catch {
      return response.status(500).json({
        errors: [`Não foi possivel retornar um user para o name ${name}.`],
      });
    }
  }
}
