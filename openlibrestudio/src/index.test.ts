import { describe, it, expect, toBe } from 'vitest';
import { formatCurrency } from './lib/formatCurrency';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});


it('adds the $ sign before the given number', () => {
    const result = formatCurrency(10)

    expect(result).toBe('$10')
})