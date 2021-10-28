import { NestFactory } from '@nestjs/core';
import  configuration  from './infraestructure/common/configuration';
import { MsnotificationcuschannelModule } from './interfaces/modules/Msnotificationcuschannel.module';

async function bootstrap() {
  const app = await NestFactory.create(MsnotificationcuschannelModule);

  app.setGlobalPrefix('/APIM/COM/BusinessInteraction/RSNotificationCustomerChannel/V1/');

  await app.listen(app.get(configuration.KEY).PORT);
}
bootstrap();
