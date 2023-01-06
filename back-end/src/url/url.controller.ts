import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { GetUrlDto } from './dtos/get-url.dto';
import { PostUrlDto } from './dtos/post-url.dto';
import { Url } from './url.schema';
import { UrlService } from './url.service';

@Controller()
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Get()
  getDefault() {
    return "It's works.";
  }

  @Get(':slug')
  async getUrl(@Param() params: GetUrlDto): Promise<Url> {
    const data = await this.urlService.findSlug(params.slug);
    if (data) return data;

    throw new HttpException('Fail to find slug!', HttpStatus.NOT_FOUND);
  }

  @Post()
  async postUrl(@Body() body: PostUrlDto): Promise<Url> {
    const data = await this.urlService.createSlug(body.url);

    if (data) return data;

    throw new HttpException('Fail to create slug!', HttpStatus.NOT_FOUND);
  }
}
