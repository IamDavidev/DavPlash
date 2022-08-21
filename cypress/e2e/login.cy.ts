import { URL_LOGIN_IN_LOCALHOST } from '~constants/cypress.const';

describe('Login Test Inputs', (): void => {
	beforeEach((): void => {
		cy.visit(URL_LOGIN_IN_LOCALHOST);
	});

	it('Login failed sign up', (): void => {
		cy.contains('Login');

		cy.get('input[name="name"]').type('@$$@#');

		cy.get('input[name="username"]').type('David Lezama ');

		cy.get('input[name="password"]').type('thisisnotvalidpassword');

		cy.get('input[name="confirmPassword"]').type('@#!@$');

		cy.get('input[name="email"]').type('thisisnotvali@demail');

		cy.get('button[type="submit"]').click();
	});

	it(' login success sign up', (): void => {
		cy.contains('Login');

		cy.get('input[name="name"]').type('David Lezama Trejo');

		cy.get('input[name="username"]').type('DavidLezama');

		cy.get('input[name="password"]').type('2XdyrEicx2GMPFz');

		cy.get('input[name="confirmPassword"]').type('2XdyrEicx2GMPFz');

		cy.get('input[name="email"]').type('test@gmail.com');

		cy.get('button[type="submit"]').click();
	});
});
