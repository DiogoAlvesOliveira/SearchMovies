import di from './di';
import { MoviesServiceImpl } from './services/impl/movies.service-impl';

export const privateProviders = [
  {
    provide: di.MOVIES_SERVICE,
    useClass: MoviesServiceImpl,
  },
];
