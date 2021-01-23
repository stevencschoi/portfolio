/// <reference types="cypress" />
import '../../support/commands';

context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('navigation', () => {
    it('should scroll to specific content on click', () => {
      cy.get('.hero');
      cy.get('.button-container');
      cy.get('[data-cy=view]').click();
    });
  });

  describe('page layout', () => {
    it('should display header', () => {
      cy.get('header').should('exist');
    });

    it('should display nav', () => {
      cy.get('nav').should('exist');
    });

    it('should display footer', () => {
      cy.get('footer').should('exist');
    });
  });
});
