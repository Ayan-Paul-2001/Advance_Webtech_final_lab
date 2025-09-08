import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    register(createUserDto: CreateUserDto): Promise<User>;
    validateUser(email: string, password: string): Promise<User | null>;
}
