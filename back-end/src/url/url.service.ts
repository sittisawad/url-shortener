import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Url, UrlDocument } from './url.schema';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private model: Model<UrlDocument>) {}

  async createSlug(originalUrl: string): Promise<Url> {
    let url = await this.model.findOne({ original: originalUrl }).exec();
    if (url) return url;

    return await new this.model({
      original: originalUrl,
      slug: Math.random().toString(36).slice(2, 8),
    }).save();
  }

  async findSlug(slug: string): Promise<Url | null> {
    return await this.model.findOne({ slug: slug }).exec();
  }
}
