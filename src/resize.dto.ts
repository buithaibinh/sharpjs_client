import { fit, format } from './interfaces';

class Resize {
  constructor(args: Partial<Resize>) {
    Object.assign(this, args);
  }

  public height?: number;
  public width?: number;
  public fit?: fit = 'cover';
}

class SmartCrop {
  constructor(args: Partial<SmartCrop>) {
    Object.assign(this, args);
  }

  public faceIndex?: number;
  public padding?: number;
}

export class ResizeDto {
  constructor(args: Partial<ResizeDto>) {
    Object.assign(this, args);
  }

  public resize?: Resize;
  public toFormat?: format;

  public quality?: number;

  // Flip the image about the vertical Y axis
  public rotate?: number;

  // Flop the image about the horizontal X axis
  public flop?: boolean;

  // Flip the image about the vertical Y axis
  public flip?: boolean;

  // AWS
  public smartCrop?: SmartCrop
}
