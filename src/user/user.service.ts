import { User } from "./model/user.entity";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {  } from '@nestjs/common';

export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){
        
       
    }

    // To return all the users
    async all(): Promise<User[]>{
        return await this.userRepository.find();
    }

    // To Create user
    async create(data): Promise<any>{
        return this.userRepository.save(data)
    }

     // To find user by Condition
     async findOne(condition, relations: any[] = []):Promise<any>{
        return this.userRepository.findOne({where: condition,relations});
    }

     // To find user by id
     async findOneById(id:number):Promise<any>{
        return this.userRepository.findOneBy({id: id});
    }


    
}
