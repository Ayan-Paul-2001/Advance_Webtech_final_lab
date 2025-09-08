import { Injectable } from '@nestjs/common';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create({
      fullName: createUserDto.fullName,
      email: createUserDto.email,
      password: createUserDto.password,
      role: createUserDto.role,
      adminCode: createUserDto.adminCode,
      contactNumber: createUserDto.contactNumber,
    });
    return await this.usersRepository.save(user);
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
