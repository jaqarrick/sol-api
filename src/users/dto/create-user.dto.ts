import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
}
