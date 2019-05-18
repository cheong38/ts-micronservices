import { NestFactory } from '@nestjs/core';

import { SubscriptionsModule } from './SubscriptionsModule';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(SubscriptionsModule);
  await app.listen(port);
}
bootstrap();
