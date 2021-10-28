import { PutmessageService } from './../../application/use_case/putmessage/putmessage.service';
import { MessageService } from './../../application/use_case/message/message.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/infraestructure/common/configuration';
import { MessageController } from '../controllers/message.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    })
  ],
  controllers: [MessageController],
  providers: [MessageService, PutmessageService],
})
export class MsnotificationcuschannelModule {}
