import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @ApiProperty({ type: Number, required: true })
  itemsCount: number;
  @IsNumber()
  @ApiProperty({ type: Number, required: true })
  price: number;
  @IsNumber()
  @ApiProperty({ type: Number, required: true })
  userId: number;
}
