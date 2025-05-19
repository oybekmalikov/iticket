import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeatTypesService } from './seat_types.service';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';

@Controller('seat-types')
export class SeatTypesController {
  constructor(private readonly seatTypesService: SeatTypesService) {}

  @Post()
  create(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypesService.create(createSeatTypeDto);
  }

  @Get()
  findAll() {
    return this.seatTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatTypesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatTypeDto: UpdateSeatTypeDto) {
    return this.seatTypesService.update(id, updateSeatTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatTypesService.remove(id);
  }
}
