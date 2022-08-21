import { URL_APP_IN_LOCALHOST } from '~constants/cypress.const';

describe('App can be lauched', () => {
	it('should be lauched', () => {
		cy.visit(URL_APP_IN_LOCALHOST);
		cy.contains('Discover, collect and sale extraordinary Photos');
		cy.contains('Top Photos');
		cy.contains('Top Collections');
		cy.contains('Users');
	});
});
