import { Module } from '@nestjs/common';
import { privateProviders } from './di-providers';
import { MoviesController } from './controllers/movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { UserMovie } from './entities/user-movie.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserMovie]),
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
