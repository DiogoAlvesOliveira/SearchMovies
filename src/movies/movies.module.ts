import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { privateProviders } from './di-providers';
import { MoviesController } from './controllers/movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteMovie } from './entities/favorite-movie.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FavoriteMovie]),
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 20000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [MoviesController],
  providers: [...privateProviders],
})
export class MoviesModule {}
