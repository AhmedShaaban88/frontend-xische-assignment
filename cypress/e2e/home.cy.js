describe('Open the website and test main functionality', () => {
    it('successfully load the data and title appears', () => {
        cy.visit('/');
        cy.get('.title').should('exist').should('have.text', "The New York Times");
    })
    it('period filter should exist with 3 values and today should be selected by default', () => {
        cy.visit('/');
        cy.get('#day-filter').should("exist").find('option').should('have.length', 3);
        cy.get('#day-filter').should("have.value", "1");
    })
    it('change period filter make loader shown and data change', () => {
        cy.visit('/');
        cy.get('#day-filter').select("7");
        cy.get('[role = "status-loading"]').should("exist");
    });
    it('when page loaded should have articles', () => {
        cy.visit('/');
        cy.get('[data-testid="articles-container"]').should("exist").children('.article').should('have.length.gt', 1);
        cy.get('.article a').should("have.attr", 'target', '_blank');
    });
})