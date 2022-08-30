/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/board/22376225007');
});

it('Chaining commands', () => {
  cy.get('[data-cy="task"]').eq(1).contains('milk');
});

it('Multiple assertions with then', () => {
  cy.get('[data-cy=task]').then((item) => {
    if (item.length !== 3) {
      throw new Error('Not enough elements');
    }

    expect(item[0]).to.contain.text('bread');
    expect(item[1]).to.contain.text('milk');
    expect(item[2]).to.contain.text('butter');
  });
});

it('Multiple assertions with should', () => {
  cy.get('[data-cy=task]').should((item) => {
    if (item.length !== 3) {
      throw new Error('Not enough elements');
    }

    expect(item[0]).to.contain.text('bread');
    expect(item[1]).to.contain.text('milk');
  });
});

it('Changing the DOM', () => {
  cy.visit('/');

  cy.get('[data-cy="star"]').invoke('show').click();
});

it('Add a class to an element', () => {
  cy.get('[data-cy="task"]').eq(2).invoke('addClass', 'overDue');
});

it.only('Changing the DOM', () => {
  cy.visit('/');

  cy.get('[data-cy="board-item"]').trigger('mouseover');

  cy.get('[data-cy="star"]').trigger('be.visible');

  cy.get('[data-cy="board-item"]').trigger('mouseout');

  cy.get('[data-cy="star"]').should('not.be.visible');
});
