describe('navigation no logged', (): void => {
	beforeEach((): void => {
		cy.visit('/'); // localhost: 3000;
	});

	it('visit login', (): void => {
		cy.get('[data-test-id="nav-login"]').contains('Login').click();
		/**
		 * test inputs page login
		 */
		cy.get('input[name="name"]').should('exist');
		cy.get('input[name="username"]').should('exist');
		cy.get('input[name="password"]').should('exist');
		cy.get('input[name="confirmPassword"]').should('exist');
		cy.get('input[name="email"]').should('exist');

		/**
		 * test card images page login
		 */
		cy.get('[data-test-id="card-image-error"]').should('have.length', 2);
	});
});
