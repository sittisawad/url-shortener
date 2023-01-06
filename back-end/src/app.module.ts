import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConnectionString } from 'configs/config';
import { UrlModule } from './url/url.module';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConnectionString, { dbName: 'shortener' }),
    UrlModule,
  ],
})
export class AppModule {}
