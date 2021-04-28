/* eslint-disable no-unused-vars */
import { URL } from 'url';


export interface Signer {
  sign(string: string | URL): string;
  verify(string: string): boolean;
}

export type fit = 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
export type format = 'jpeg' | 'png' | 'jpg' | 'webp';
