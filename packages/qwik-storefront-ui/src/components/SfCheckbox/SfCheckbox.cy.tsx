import { SfIconHome } from '../SfIcons';
import { SfCheckbox } from './SfCheckbox';

it('should render the component', () => {
  const content = 'label';
  cy.mount(<SfCheckbox value="value" />);
  cy.get('input[type="checkbox"]').should('be.visible');
});

it('should apply a custom class', () => {
  const className = 'example-class';

  cy.mount(<SfCheckbox value="value" class={className} />);
  cy.get('input[type="checkbox"]').should('have.class', className);
});
