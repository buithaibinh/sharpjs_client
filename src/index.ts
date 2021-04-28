/* eslint-disable @typescript-eslint/no-var-requires */
import "reflect-metadata";

import { container } from "tsyringe";
import { ImageUrl } from "./image-url.service";

export function createClient(endpoint: string, bucketName: string): ImageUrl {
  const clientContainer = container.createChildContainer();
  clientContainer.register("endpoint", { useValue: endpoint });
  clientContainer.register("bucketName", { useValue: bucketName });
  return clientContainer.resolve(ImageUrl);
}
