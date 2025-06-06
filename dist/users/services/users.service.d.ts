import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dtos/create-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<{
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
    } | null>;
    remove(id: number): Promise<{
        email: string;
        name: string | null;
        id: number;
        createdAt: Date;
    }>;
}
