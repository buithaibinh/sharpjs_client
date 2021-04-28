# Install

```sh
$ yarn add @skg-global/sharp_client
```

# Client integration

You can be used to generate URLs for images.

```js
import { createClient } from '@skg-global/sharp_client';

const client = createClient('http://example.com/base', 'sample-bucket');

const originalImageUrl = 'demo.png';
const options = {
  resize: { width: 200, fit: 'cover' },
};

const fooUrl = client.url(originalImageUrl, options);
 --> http://example.com/base/eyJidWNrZXQiOiJzYW1wbGUtYnVja2V0Iiwia2V5IjoiZGVtby5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDAsImZpdCI6ImNvdmVyIn19fQ==

```

Currently the following transformations can be applied to images:

| Client option name | Description |
|--------------------|-------------|
| resize.width |
| resize.height |
| toFormat | Output image format. Valid values: every valid [sharp output format string](https://sharp.pixelplumbing.com/api-output#toformat), i.e. `jpeg`, `gif`, `webp`. |
| rotate | Rotate the output image by either an explicit angle or auto-orient based on the EXIF  [sharp cropping feature](https://sharp.pixelplumbing.com/api-operation#rotate).|
| flip | Flip the image about the vertical Y axis  [sharp flip feature](https://sharp.pixelplumbing.com/api-operation#flip).|
| flop | Flop the image about the vertical X axis  [sharp flop feature](https://sharp.pixelplumbing.com/api-operation#flop).|
| smartCrop |  (optional, object) activates the smart cropping feature for an original image (Amazon Rekognition)|