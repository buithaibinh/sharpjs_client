export interface Signer {
  sign(string: string): string;
  verify(string: string): boolean;
}

export type fit = "cover" | "contain" | "fill" | "inside" | "outside";
export type format = "jpeg" | "png" | "jpg" | "webp";
