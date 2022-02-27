import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDto } from './dtos/user.dto';
import { User, UserSchema, UserDocument } from './schemas/user.schema';
import { UserService } from './services/user.service';
const schemaMongoose = [{ name: User.name, schema: UserSchema }];

@Global()
@Module({
  controllers: [],
  providers: [UserService],
  exports: [UserService],
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
    MongooseModule.forFeature(schemaMongoose),
  ],
})
export class DatabaseModule {}
export { UserService, UserDto, UserDocument };
