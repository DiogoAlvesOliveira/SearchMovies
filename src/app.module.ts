import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMovie } from './movies/entities/user-movie.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: __dirname + '/db.sqlite',
      synchronize: true,
      entities: [UserMovie],
    }),
    ConfigModule.forRoot({
      cache: true,
    }),
    MoviesModule,
  ],
})
export class AppModule {}
