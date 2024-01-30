import { $ } from '@builder.io/qwik';
import { SfChip } from './SfChip';

it('should render label', () => {
  const content = 'label';
  cy.mount(<SfChip>{content}</SfChip>);
  cy.contains(content).should('be.visible');
});

it('should apply custom class', () => {
  const content = 'label';
  const customCls = 'example-class';

  cy.mount(<SfChip class={customCls}>{content}</SfChip>);
  cy.contains(content).should('have.class', customCls);
});

it('should be checked programmatically', () => {
  cy.mount(
    <SfChip
      inputProps={{
        checked: true,
      }}
    />
  );

  cy.get('input[type="checkbox"]').check();
  cy.get('input[type="checkbox"]').should('be.checked');
});

it('should accepts and apply any inputProps (i.e. "disabled")', () => {
  cy.mount(
    <SfChip
      inputProps={{
        disabled: true,
      }}
    />
  );

  cy.get('input[type="checkbox"]').should('be.disabled');
});

it('should display prefix content', () => {
  cy.mount(
    <SfChip size="sm" class="mr-2" slotPrefix={true}>
      <div q:slot="prefix">✅</div>
      Texts
    </SfChip>
  );

  cy.get('[data-testid="chip"]')
    .invoke('text')
    .should((text) => {
      const regex = /✅\s*Texts/;
      expect(regex.test(text)).to.be.true;
    });
});

it('should display suffix content', () => {
  cy.mount(
    <SfChip size="sm" class="mr-2" slotSuffix={true}>
      <div q:slot="suffix">✅</div>
      Texts
    </SfChip>
  );

  cy.get('[data-testid="chip"]')
    .invoke('text')
    .should((text) => {
      const regex = /Texts\s*✅/;
      expect(regex.test(text)).to.be.true;
    });
});

it('should invoke onChange$ when clicked', () => {
  const onClickSpy = cy.spy().as('onClickSpy');

  const onClickHandler = $(() => {
    cy.get('@onClickSpy').invoke('call');
  });

  cy.mount(<SfChip onChange$={onClickHandler}>Text</SfChip>);
  cy.get('input[type="checkbox"]').check();
  cy.get('@onClickSpy').should('have.been.calledOnce');
});
