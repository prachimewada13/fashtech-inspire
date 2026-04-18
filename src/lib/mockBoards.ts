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
    id: "mock-1",
    name: "Wallpapers",
    style: "aesthetic",
    outfitCount: 283,
    pinsLabel: "283 Pins",
    updatedLabel: "2d",
    coverImage: u("photo-1503342217505-b0a15ec3261c"),
    covers: [
      u("photo-1503342217505-b0a15ec3261c"),
      u("photo-1517816743773-6e0fd518b4a6"),
      u("photo-1499914485622-a88fac536970"),
      u("photo-1519681393784-d120267933ba"),
    ],
  },
  {
    id: "mock-2",
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
    id: "mock-3",
    name: "Beauty",
    style: "beauty",
    outfitCount: 1300,
    pinsLabel: "1.3k Pins",
    updatedLabel: "5d",
    coverImage: u("photo-1522335789203-aaaff90a5dc8"),
    covers: [
      u("photo-1522335789203-aaaff90a5dc8"),
      u("photo-1512496015851-a90fb38ba796"),
      u("photo-1503236823255-94609f598e71"),
      u("photo-1503342217505-b0a15ec3261c"),
    ],
  },
  {
    id: "mock-4",
    name: "Fashion",
    style: "minimal",
    outfitCount: 3200,
    pinsLabel: "3.2k Pins",
    updatedLabel: "5d",
    coverImage: u("photo-1490481651871-ab68de25d43d"),
    covers: [
      u("photo-1490481651871-ab68de25d43d"),
      u("photo-1496747611176-843222e1e57c"),
      u("photo-1495121605193-b116b5b9c5fe"),
      u("photo-1487222477894-8943e31ef7b2"),
    ],
  },
  {
    id: "mock-5",
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
    id: "mock-6",
    name: "Y2K",
    style: "y2k",
    outfitCount: 89,
    pinsLabel: "89 Pins",
    updatedLabel: "2w",
    coverImage: u("photo-1485518882345-15568b007407"),
    covers: [
      u("photo-1485518882345-15568b007407"),
      u("photo-1469398715555-76331a6c7c9b"),
      u("photo-1542272604-787c3835535d"),
      u("photo-1503342217505-b0a15ec3261c"),
    ],
  },
  {
    id: "mock-7",
    name: "Vintage",
    style: "vintage",
    outfitCount: 240,
    pinsLabel: "240 Pins",
    updatedLabel: "3w",
    coverImage: u("photo-1469334031218-e382a71b716b"),
    covers: [
      u("photo-1469334031218-e382a71b716b"),
      u("photo-1496747611176-843222e1e57c"),
      u("photo-1487222477894-8943e31ef7b2"),
      u("photo-1509631179647-0177331693ae"),
    ],
  },
  {
    id: "mock-8",
    name: "Cottagecore",
    style: "cottagecore",
    outfitCount: 67,
    pinsLabel: "67 Pins",
    updatedLabel: "1mo",
    coverImage: u("photo-1469334031218-e382a71b716b"),
    covers: [
      u("photo-1469334031218-e382a71b716b"),
      u("photo-1490481651871-ab68de25d43d"),
      u("photo-1496747611176-843222e1e57c"),
      u("photo-1485518882345-15568b007407"),
    ],
  },
  {
    id: "mock-9",
    name: "Athleisure",
    style: "athleisure",
    outfitCount: 145,
    pinsLabel: "145 Pins",
    updatedLabel: "1mo",
    coverImage: u("photo-1517466787929-bc90951d0974"),
    covers: [
      u("photo-1517466787929-bc90951d0974"),
      u("photo-1495121605193-b116b5b9c5fe"),
      u("photo-1487222477894-8943e31ef7b2"),
      u("photo-1542272604-787c3835535d"),
    ],
  },
  {
    id: "mock-10",
    name: "Preppy",
    style: "preppy",
    outfitCount: 92,
    pinsLabel: "92 Pins",
    updatedLabel: "2mo",
    coverImage: u("photo-1507003211169-0a1dd7228f2d"),
    covers: [
      u("photo-1507003211169-0a1dd7228f2d"),
      u("photo-1490481651871-ab68de25d43d"),
      u("photo-1496747611176-843222e1e57c"),
      u("photo-1487222477894-8943e31ef7b2"),
    ],
  },
];
