import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class PostUrlDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^(ftp|http|https):\/\/[^ "]+$/, { message: 'Invalid url format!' })
  url: string;
}
