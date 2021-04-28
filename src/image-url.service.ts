/* eslint-disable no-unused-vars */
import { inject, injectable } from 'tsyringe';
import btoa from 'btoa';
import { ResizeDto } from './resize.dto';

@injectable()
export class ImageUrl {
  constructor(
    @inject('endpoint') private readonly endpoint: string,
    @inject('bucketName') private readonly bucketName: string
  ) {}

  private _buildUrl(
    imageId: string,
    dto: Partial<Omit<ResizeDto, 'url'>>
  ): string {
    const _edits: any = new ResizeDto(dto);
    if (_edits.toFormat && _edits.quality) {
      _edits[_edits.toFormat] = { quality: _edits.quality };
      delete _edits.quality;
    }
    // Set up the request body
    const request = {
      bucket: this.bucketName,
      key: imageId,
      edits: _edits,
    };

    // Setup encoded request
    const str = JSON.stringify(request);
    const enc = btoa(str);
    return `${this.endpoint}/${enc}`;
  }

  url(imageId: string, dto: Partial<Omit<ResizeDto, 'url'>>): string {
    return this._buildUrl(imageId, dto).toString();
  }
}
