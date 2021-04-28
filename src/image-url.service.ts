/* eslint-disable no-unused-vars */
import { inject, injectable } from 'tsyringe';
import { URL } from 'url';
import { ConfigService } from './config.service';
import { Signer } from './interfaces';
import { UrlSigner } from './signed-url.service';
import btoa from 'btoa';
import { ResizeDto } from './resize.dto';

@injectable()
export class ImageUrl {
  constructor(
    @inject('endpoint') private readonly endpoint: string,
    @inject('bucketName') private readonly bucketName: string,
    @inject(UrlSigner) private readonly urlSigner: Signer,
    private readonly config: ConfigService
  ) {}

  private _buildUrl(
    imageId: string,
    dto: Partial<Omit<ResizeDto, 'url'>>
  ): URL {
    const url = new URL(this.endpoint);
    const _edits: any = new ResizeDto(dto);
    if (_edits.toFormat && _edits.quality) {
      _edits[_edits.toFormat] = { quality: _edits.quality };
      delete(_edits.quality)
    }
    // Set up the request body
    const request = {
      bucket: this.bucketName,
      key: imageId,
      edits: _edits,
    };

    console.log(request);
    // Setup encoded request
    const str = JSON.stringify(request);
    const enc = btoa(str);
    url.pathname += `${enc}`;

    if (this.config.get('signedUrl.secret')) {
      this.urlSigner.sign(url);
    }

    return url;
  }

  url(imageId: string, dto: Partial<Omit<ResizeDto, 'url'>>): string {
    return this._buildUrl(imageId, dto).toString();
  }
}
