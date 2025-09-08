import { IsEmail, IsString, Matches, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  role: string;

  @IsString()
  @Matches(/^[A-Za-z0-9]{4,}$/, { message: 'Admin Code must be alphanumeric' })
  adminCode: string;

  @IsString({ message: 'Contact number must be 11 digits' })
  @Length(11, 11, { message: 'Contact number must be 11 digits' })
  contactNumber: string;
}