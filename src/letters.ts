/** The 26 letters of the ASL manual alphabet. */
export const ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
] as const;

export type Letter = (typeof ALPHABET)[number];

/** Letters signed with movement; recognised from a fingertip path rather than a single frame. */
export const MOVING_LETTERS: readonly Letter[] = ['J', 'Z'];

/** The 24 letters recognisable from a single handshape. */
export const STATIC_LETTERS: readonly Letter[] = ALPHABET.filter((l) => !MOVING_LETTERS.includes(l));

export function isLetter(value: string): value is Letter {
  return (ALPHABET as readonly string[]).includes(value);
}

export function isStaticLetter(letter: Letter): boolean {
  return !MOVING_LETTERS.includes(letter);
}
