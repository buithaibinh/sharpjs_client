import { URL } from 'url';
import { injectable } from 'tsyringe';

@injectable()
export class UrlSigner {
  constructor() {}

  sign(url: string | URL): string {
    if (typeof url === 'string') {
      url = new URL(url);
    }
    return url.toString();
  }
}
