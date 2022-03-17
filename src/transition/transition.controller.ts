import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { TransitionService } from './transition.service';
import { SaleDto } from './dto/create-transition.dto';
import { UpdateTransitionDto } from './dto/update-transition.dto';
import { randomUUID } from 'crypto';

@Controller('transition')
export class TransitionController {
    constructor(private readonly transitionService: TransitionService) {}

    @Post()
    create(@Body() createTransitionDto: SaleDto) {
        createTransitionDto['sale_id'] = randomUUID();
        createTransitionDto['invoice_id'] = randomUUID();
        return this.transitionService.create(createTransitionDto);
    }

    @Get()
    findAll() {
        return this.transitionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.transitionService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateTransitionDto: UpdateTransitionDto,
    ) {
        return this.transitionService.update(id, updateTransitionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.transitionService.remove(+id);
    }
}
