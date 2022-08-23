describe('App can be lauched', (): void => {
	it('should be lauched', (): void => {
		cy.visit('/');

		/**
		 * title and btns header layout
		 */
		cy.contains('Discover, collect and sale extraordinary Photos');
		cy.contains('Get Started Collections');
		cy.contains('Learn More Photos');

		/**
		 * Titles of sections
		 */
		cy.contains('Top Photos');
		cy.contains('Top Collections');
		cy.contains('Users');
	});
});
