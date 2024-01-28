import { SfIconHome } from '../SfIcons';
import { SfButton } from './SfButton';

it('should render content', () => {
  const content = 'label';
  cy.mount(<SfButton>{content}</SfButton>);
  cy.contains(content).should('be.visible');
});

it('should render an anchor', () => {
  cy.mount(
    <SfButton as="a" href="/">
      Link
    </SfButton>
  );
  cy.get('a').should('have.attr', 'href', '/');
});

it('should display prefix content', () => {
  cy.mount(
    <SfButton slotPrefix>
      <div q:slot="prefix">✅</div>
      Home
    </SfButton>
  );

  cy.get('button')
    .invoke('text')
    .should((text) => {
      const regex = /✅\s*Home/;
      expect(regex.test(text)).to.be.true;
    });
});

it('should display suffix content', () => {
  cy.mount(
    <SfButton slotSuffix>
      <div q:slot="suffix">✅</div>
      Home
    </SfButton>
  );

  cy.get('button')
    .invoke('text')
    .should((text) => {
      const regex = /Home\s*✅/;
      expect(regex.test(text)).to.be.true;
    });
});
