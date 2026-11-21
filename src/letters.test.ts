import { describe, expect, it } from 'vitest';
import { ALPHABET, MOVING_LETTERS, STATIC_LETTERS, isLetter, isStaticLetter } from './letters';

describe('letters', () => {
  it('has 26 letters', () => {
    expect(ALPHABET).toHaveLength(26);
  });

  it('splits into 24 static letters and J/Z', () => {
    expect(STATIC_LETTERS).toHaveLength(24);
    expect(MOVING_LETTERS).toEqual(['J', 'Z']);
    expect(STATIC_LETTERS).not.toContain('J');
    expect(STATIC_LETTERS).not.toContain('Z');
  });

  it('recognises valid letters only', () => {
    expect(isLetter('A')).toBe(true);
    expect(isLetter('a')).toBe(false);
    expect(isLetter('AB')).toBe(false);
    expect(isLetter('')).toBe(false);
  });

  it('classifies static vs moving', () => {
    expect(isStaticLetter('A')).toBe(true);
    expect(isStaticLetter('J')).toBe(false);
    expect(isStaticLetter('Z')).toBe(false);
  });
});
