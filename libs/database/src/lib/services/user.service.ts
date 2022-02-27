import { UserDto } from './../dtos/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) public _userModel: Model<User>) {}
  async create(prepare: UserDto) {
    return await new this._userModel(prepare).save();
    
  }
}
