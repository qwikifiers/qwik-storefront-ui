import { SfBadge } from './SfBadge';

it('should render numbers', () => {
  const value = 10;
  cy.mount(<SfBadge content={value} />);
  cy.contains(value).should('be.visible');
});

it('should render 99+ if number is greater than 99', () => {
  cy.mount(<SfBadge content={100} />);
  cy.contains('99+').should('be.visible');
});

it('should render short strings', () => {
  const value = 'new';
  cy.mount(<SfBadge content={value} />);
  cy.contains(value).should('be.visible');
});

it('should render long strings', () => {
  const value = 'This is a Badge';
  cy.mount(<SfBadge content={value} />);
  cy.contains(value).should('be.visible');
});

it('should apply a custom class', () => {
  const className = 'example-class';
  cy.mount(<SfBadge content={100} class={className} />);
  cy.get('[data-testid="badge"]').should('have.class', className);
});

it('should hide content when variant is "dot"', () => {
  const value = 10;
  cy.mount(<SfBadge content={value} variant="dot" />);
  cy.contains(value).should('not.exist');
});
