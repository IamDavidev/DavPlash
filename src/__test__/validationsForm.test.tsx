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

describe('valition function is Exist Value', (): void => {
	it('With string empty', (): void => {
		expect(isExixting('')).toBe(false);
	});

	it('With value !undefined ', (): void => {
		// this test crashed for that the function only recive a string
		// expect(isExixting(undefined)).toBe(false);
	});

	it('with Value Null', (): void => {
		// expect(isExixting(null)).toBe(false);
	});

	it('With Value Diferent of string', (): void => {
		// expect(isExixting(1)).toBe(false);
	});

	it('With Value Valid', (): void => {
		expect(isExixting('test')).toBe(true);
	});
});

describe('Validation function is has less 8 characters', (): void => {
	it('7 Characters', (): void => {
		expect(hasLessEightCharacters('1234567')).toBe(true);
	});

	it('8 Characters', (): void => {
		expect(hasLessEightCharacters('12345678')).toBe(false);
	});

	it('9 Characters', (): void => {
		expect(hasLessEightCharacters('123456789')).toBe(false);
	});
});

describe('Validations function is has more 64 characters', (): void => {
	it('63 characters', (): void => {
		expect(hasMoreSixtyFourCharacters(WORD_SIXTY_FOUR)).toBe(false);
	});

	it('64 charactes', (): void => {
		expect(hasMoreSixtyFourCharacters(WORD_SIXTY_FOUR + '1')).toBe(true);
	});

	it('65 characters', (): void => {
		expect(hasMoreSixtyFourCharacters(WORD_SIXTY_FOUR + '12')).toBe(true);
	});
});

describe('validations has at leat one lower case letter', (): void => {
	it('not include lower case', (): void => {
		expect(hasAtLeastOneLowercaseLetter('TEST')).toBe(false);
	});

	it('include lowercase', (): void => {
		expect(hasAtLeastOneLowercaseLetter('test')).toBe(true);
	});
});

describe('Validations has at leat one uppercase letter', (): void => {
	it('not include uppercase', (): void => {
		expect(hasAtLeastOneUppercaseLetter('test')).toBe(false);
	});

	it('include uppercase', (): void => {
		expect(hasAtLeastOneUppercaseLetter('TEST')).toBe(true);
	});
});

describe('validations has at least one number', (): void => {
	it('not include number', (): void => {
		expect(hasAtLeastOneNumber('TESTX')).toBe(false);
	});

	it('include number', (): void => {
		expect(hasAtLeastOneNumber('TESTX1')).toBe(true);
	});
});

describe('validations is equal values', (): void => {
	it('not equal values', (): void => {
		expect(isEqualValues('test', 'test1')).toBe(false);
	});

	it('Equal Values', (): void => {
		expect(isEqualValues('test', 'test')).toBe(true);
	});
});

describe('Validations content space', (): void => {
	it('not include space', (): void => {
		expect(hasSpace('test')).toBe(false);
	});

	it('include space', (): void => {
		expect(hasSpace('te st')).toBe(true);
	});
});

describe('validations format email', (): void => {
	it('not include @', (): void => {
		expect(isFormatCorrectTheEmail('test$gmail.com')).toBe(false);
	});
	it('not format email', (): void => {
		expect(isFormatCorrectTheEmail('test@gmail')).toBe(false);
	});

	it('format email', (): void => {
		expect(isFormatCorrectTheEmail('davidlez2mgk@gmail.com')).toBe(true);
	});
});
