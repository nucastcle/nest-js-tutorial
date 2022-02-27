import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserResponseDto } from '../dtos/user.dto';


@Schema()
export class UserDocument {
  @Prop({ unique: true, required: true })
  email: string;
  @Prop()
  text: string;
  @Prop({ required: true })
  rating: number;
  @Prop()
  type: string;
}
export class User extends UserDocument {
  toUserResponse: () => Promise<UserResponseDto>;
};
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.method({
  toUserResponse() {
    return {
      email: (this as User).email 
    } as UserResponseDto
  }
})
