import 'reflect-metadata';

import { container } from 'tsyringe';
import { ImageUrl } from './image-url.service';
import { ConfigService } from './config.service';

export function createClient(
  endpoint: string,
  bucketName: string,
  secret?: string
): ImageUrl {
  const clientContainer = container.createChildContainer();
  clientContainer.register('endpoint', { useValue: endpoint });
  clientContainer.register('bucketName', { useValue: bucketName });

  if (secret) {
    clientContainer.resolve(ConfigService).set('signedUrl.secret', secret);
  }

  return clientContainer.resolve(ImageUrl);
}
