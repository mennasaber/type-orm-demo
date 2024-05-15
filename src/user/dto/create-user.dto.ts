import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ type: String, required: true })
  name: string;
  @IsString()
  @ApiProperty({ type: String, required: true })
  phoneNumber: string;
  @IsEmail()
  @ApiProperty({ type: String, required: true })
  email: string;
}
