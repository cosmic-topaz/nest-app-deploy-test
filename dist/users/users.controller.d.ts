import { UsersService } from './services/users.service';
import { CreateUserDto } from './dtos/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
    }>;
    update(id: string): string;
    findAll(): Promise<{
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
    } | null>;
    remove(id: string): Promise<{
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
    }>;
}
