// has === tiene

const FORMAT_EMAIL =
	"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";

/**
 *
 * @param value {string}
 * @returns  if value is empty return @false else return @true
 */
export function isExixting(value: string): boolean {
	if (typeof value !== 'string') return false;

	if (value === undefined) return false;

	if (value === null) return false;

	if (value === '') return false;

	return true;
}

/**
 *
 * @param value {string}
 * @returns if number of caracters  is more that 8 return @true else return @false
 */
export function hasLessEightCharacters(value: string): boolean {
	if (value.length >= 8) return false;

	return true;
}

/**
 *
 * @param value {string}
 * @returns if number of caracters  is less that 64 return @true else return @false
 */
export function hasMoreSixtyFourCharacters(value: string): boolean {
	if (value.length <= 64) return false;

	return true;
}

/**
 *
 * @param value {string }
 * @returns if value contains at least one lowercase letter return @true else return @false
 */

export function hasAtLeastOneLowercaseLetter(value: string): boolean {
	return value.search(/[a-z]/) !== -1;
}

/**
 *
 * @param value {string}
 * @returns if value contains at least one uppercase letter return @true else return @false
 */
export function hasAtLeastOneUppercaseLetter(value: string): boolean {
	return value.search(/[A-Z]/) !== -1;
}

/**
 *
 * @param value {string}
 * @returns if value contains at least one number return @true else return @false
 */
export function hasAtLeastOneNumber(value: string): boolean {
	return value.search(/[0-9]/) !== -1;
}

/**
 *
 * @param value {string}
 * @param valueToBeCompared {string}
 * @returns if value is equal to valueToBeCompared return @true else return @false
 */
export function isEqualValues(value: any, valueToBeCompared: any): boolean {
	return value === valueToBeCompared;
}

/**
 *
 * @params value {string}
 * @returns if Email has the format correct return @true else return @false
 */
export function isFormatCorrectTheEmail(email: string): boolean {
	if (email.match(FORMAT_EMAIL)) return true;

	return false;
}

export function hasSpace(value: string): boolean {
	return value.search(/\s/) !== -1;
}
