import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateContactDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;
}
