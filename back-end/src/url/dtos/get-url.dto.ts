import { IsString, IsNotEmpty } from 'class-validator';

export class GetUrlDto {
  @IsNotEmpty()
  @IsString()
  slug: string;
}
