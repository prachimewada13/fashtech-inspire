export type BoardStyle =
  | "goth"
  | "streetwear"
  | "minimal"
  | "y2k"
  | "vintage"
  | "cottagecore"
  | "preppy"
  | "athleisure"
  | string;

export interface Board {
  id: string;
  name: string;
  description?: string;
  coverImage?: string;
  style: BoardStyle;
  outfitCount: number;
}
