import { NestFactory } from '@nestjs/core';

import { AppModule } from './AppModule';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
