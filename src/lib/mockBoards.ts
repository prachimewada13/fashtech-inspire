import type { Board } from "@/types/board";

/** Each board has 4 cover tiles to mimic Pinterest's collage thumbnail. */
export interface MockBoard extends Board {
  covers: string[];
  pinsLabel: string;
  updatedLabel: string;
}

const u = (id: string, w = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=70`;

export const mockBoards: MockBoard[] = [
  {
    id: "mock-goth",
    name: "Goth",
    style: "goth",
    outfitCount: 412,
    pinsLabel: "412 Pins",
    updatedLabel: "1w",
    coverImage: u("photo-1509631179647-0177331693ae"),
    covers: [
      u("photo-1509631179647-0177331693ae"),
      u("photo-1517466787929-bc90951d0974"),
      u("photo-1469334031218-e382a71b716b"),
      u("photo-1507003211169-0a1dd7228f2d"),
    ],
  },
  {
    id: "mock-streetwear",
    name: "Streetwear",
    style: "streetwear",
    outfitCount: 156,
    pinsLabel: "156 Pins",
    updatedLabel: "5d",
    coverImage: u("photo-1483985988355-763728e1935b"),
    covers: [
      u("photo-1483985988355-763728e1935b"),
      u("photo-1542272604-787c3835535d"),
      u("photo-1485518882345-15568b007407"),
      u("photo-1490481651871-ab68de25d43d"),
    ],
  },
  {
    id: "mock-dark-outfits",
    name: "Dark Outfits",
    style: "goth",
    outfitCount: 318,
    pinsLabel: "318 Pins",
    updatedLabel: "3d",
    coverImage: u("photo-1520975916090-3105956dac38"),
    covers: [
      u("photo-1520975916090-3105956dac38"),
      u("photo-1503342217505-b0a15ec3261c"),
      u("photo-1469398715555-76331a6c7c9b"),
      u("photo-1469334031218-e382a71b716b"),
    ],
  },
  {
    id: "mock-street-accessories",
    name: "Street Accessories",
    style: "streetwear",
    outfitCount: 204,
    pinsLabel: "204 Pins",
    updatedLabel: "6d",
    coverImage: u("photo-1495121605193-b116b5b9c5fe"),
    covers: [
      u("photo-1495121605193-b116b5b9c5fe"),
      u("photo-1487222477894-8943e31ef7b2"),
      u("photo-1542272604-787c3835535d"),
      u("photo-1485518882345-15568b007407"),
    ],
  },
  {
    id: "mock-leather",
    name: "Leather & Boots",
    style: "goth",
    outfitCount: 178,
    pinsLabel: "178 Pins",
    updatedLabel: "1w",
    coverImage: u("photo-1517466787929-bc90951d0974"),
    covers: [
      u("photo-1517466787929-bc90951d0974"),
      u("photo-1509631179647-0177331693ae"),
      u("photo-1507003211169-0a1dd7228f2d"),
      u("photo-1469334031218-e382a71b716b"),
    ],
  },
  {
    id: "mock-sneakers",
    name: "Sneakers",
    style: "streetwear",
    outfitCount: 526,
    pinsLabel: "526 Pins",
    updatedLabel: "2d",
    coverImage: u("photo-1542291026-7eec264c27ff"),
    covers: [
      u("photo-1542291026-7eec264c27ff"),
      u("photo-1556906781-9a412961c28c"),
      u("photo-1460353581641-37baddab0fa2"),
      u("photo-1595950653106-6c9ebd614d3a"),
    ],
  },
];
