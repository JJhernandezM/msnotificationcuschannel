import { MessageService } from './../../application/use_case/message/message.service';
import { Controller, HttpCode, Get, Body } from '@nestjs/common';
import { MessageRequest } from './../../domain/message/requestMessage';


@Controller()
export class MessageController {

    constructor(private messageService: MessageService) {}


    //TODO:Realizar Pipe para realizar validacion del objeto que se recibe por GET de acuerdo a la HU validar la información

    @Get('Message')
    @HttpCode(200)
    ValidateMessage(@Body() payload: MessageRequest) {
        return this.messageService.ValidateMessage(payload);
    }
}
