import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlModule } from './url/url.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@cluster0.slpkp20.mongodb.net',
      { dbName: 'shortener' },
    ),
    UrlModule,
  ],
})
export class AppModule {}
