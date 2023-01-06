import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';

export type UrlDocument = HydratedDocument<Url>;

@Schema()
export class Url {
  
  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ required: true })
  original: string;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
