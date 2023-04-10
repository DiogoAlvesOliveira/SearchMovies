import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const urls: string[] = process.env.CORS_ENABLED_URL.split('|');

  app.enableCors({
    methods: ['GET', 'POST', 'DELETE'],
    origin: urls,
  });

  app.use(helmet());
  await app.listen(3003);
}
bootstrap();
