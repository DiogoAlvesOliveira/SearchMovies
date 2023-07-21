import { Module } from '@nestjs/common';
import { privateProviders } from './di-providers';
import { MoviesController } from './controllers/movies.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
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
