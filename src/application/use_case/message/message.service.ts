import { Injectable } from '@nestjs/common';
import { MessageRequest } from './../../../domain/message/requestMessage';

@Injectable()
export class MessageService {

    async ValidateMessage(messageRequest: MessageRequest) {

    }
}
