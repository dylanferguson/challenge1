describe('Digital Content Developer challenge1', () => {
	it('navigates to /currencies/BTC via the navigation header', () => {
		cy.visit('/')
		cy.get('nav a').contains('BTC').click();
		cy.url().should('include', '/currencies/bitcoin');
	});

	it('navigates to /currencies/BTC via the home page card', () => {
		cy.visit('/')
		cy.get('a.card').contains('Bitcoin').click();
		cy.url().should('include', '/currencies/bitcoin');
	});

	it('displays five rows of data on a currency page', () => {
		cy.visit('/currencies/ethereum')
		cy.get('table').find('tr').should('have.length', 6)
	});
});