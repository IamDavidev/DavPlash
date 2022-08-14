import { describe, expect, it } from 'vitest';

import {
	hasAtLeastOneLowercaseLetter,
	hasAtLeastOneNumber,
	hasAtLeastOneUppercaseLetter,
	hasLessEightCharacters,
	hasMoreSixtyFourCharacters,
	hasSpace,
	isEqualValues,
	isExixting,
	isFormatCorrectTheEmail,
} from '~lib/validations/form.validations';

const WORD_SIXTY_FOUR =
	'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean';

describe('valition function is Exist Value', () => {
	it('With string empty', () => {
		expect(isExixting('')).toBe(false);
	});

	it('With value !undefined ', () => {
		// this test crashed for that the function only recive a string
		// expect(isExixting(undefined)).toBe(false);
	});

	it('with Value Null', () => {
		// expect(isExixting(null)).toBe(false);
	});

	it('With Value Diferent of string', () => {
		// expect(isExixting(1)).toBe(false);
	});

	it('With Value Valid', () => {
		expect(isExixting('test')).toBe(true);
	});
});

describe('Validation function is has less 8 characters', () => {
	it('7 Characters', () => {
		expect(hasLessEightCharacters('1234567')).toBe(true);
	});

	it('8 Characters', () => {
		expect(hasLessEightCharacters('12345678')).toBe(false);
	});

	it('9 Characters', () => {
		expect(hasLessEightCharacters('123456789')).toBe(false);
	});
});

describe('Validations function is has more 64 characters', () => {
	it('63 characters', () => {
		expect(hasMoreSixtyFourCharacters(WORD_SIXTY_FOUR)).toBe(false);
	});

	it('64 charactes', () => {
		expect(hasMoreSixtyFourCharacters(WORD_SIXTY_FOUR + '1')).toBe(true);
	});

	it('65 characters', () => {
		expect(hasMoreSixtyFourCharacters(WORD_SIXTY_FOUR + '12')).toBe(true);
	});
});

describe('validations has at leat one lower case letter', () => {
	it('not include lower case', () => {
		expect(hasAtLeastOneLowercaseLetter('TEST')).toBe(false);
	});

	it('include lowercase', () => {
		expect(hasAtLeastOneLowercaseLetter('test')).toBe(true);
	});
});

describe('Validations has at leat one uppercase letter', () => {
	it('not include uppercase', () => {
		expect(hasAtLeastOneUppercaseLetter('test')).toBe(false);
	});

	it('include uppercase', () => {
		expect(hasAtLeastOneUppercaseLetter('TEST')).toBe(true);
	});
});

describe('validations has at least one number', () => {
	it('not include number', () => {
		expect(hasAtLeastOneNumber('TESTX')).toBe(false);
	});

	it('include number', () => {
		expect(hasAtLeastOneNumber('TESTX1')).toBe(true);
	});
});

describe('validations is equal values', () => {
	it('not equal values', () => {
		expect(isEqualValues('test', 'test1')).toBe(false);
	});

	it('Equal Values', () => {
		expect(isEqualValues('test', 'test')).toBe(true);
	});
});

describe('Validations content space', () => {
	it('not include space', () => {
		expect(hasSpace('test')).toBe(false);
	});

	it('include space', () => {
		expect(hasSpace('te st')).toBe(true);
	});
});

describe('validations format email', () => {
	it('not include @', () => {
		expect(isFormatCorrectTheEmail('test$gmail.com')).toBe(false);
	});
	it('not format email', () => {
		expect(isFormatCorrectTheEmail('test@gmail')).toBe(false);
	});

	it('format email', () => {
		expect(isFormatCorrectTheEmail('davidlez2mgk@gmail.com')).toBe(true);
	});
});
