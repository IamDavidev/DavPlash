import { URL_APP_IN_LOCALHOST } from '~constants/cypress.const';

type classTheme = string;
const classDark: classTheme = 'chakra-ui-dark';
const classLight: classTheme = 'chakra-ui-light';

describe('App change theme ', (): void => {
	beforeEach((): void => {
		cy.visit(URL_APP_IN_LOCALHOST);
	});

	it('Should render to buttons, no login', (): void => {
		cy.get('[data-test-id="nav-login"]').contains('Login');
		cy.get('[data-test-id="nav-sign-in"]').contains('Sign In');
		cy.get('[data-test-id="nav-link-home"]').contains('Home');
	});

	it('Should change theme for app ', (): void => {
		// const btnChangeTheme = cy.get('[data-test-id="nav-btn-change-theme"]');

		cy.get('[data-test-id="nav-btn-change-theme"]').click();
		cy.get('body').should('have.class', classDark);

		cy.get('[data-test-id="nav-btn-change-theme"]').click();
		cy.get('body').should('have.class', classLight);
	});
});
