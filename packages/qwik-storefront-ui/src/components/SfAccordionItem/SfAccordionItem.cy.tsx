import { component$, useSignal } from '@builder.io/qwik';
import { SfIconChevronLeft } from '../SfIcons';
import { SfAccordionItem } from './SfAccordionItem';

const TestComponent = component$(() => {
  const openSig = useSignal(false);
  return (
    <SfAccordionItem
      open={openSig.value}
      onToggle$={() => {
        openSig.value = !openSig.value;
      }}
      class="rounded border"
    >
      <div class="flex justify-between p-2 bg-gray-100">
        <p>Click me to see the content</p>
        <SfIconChevronLeft
          class={`${openSig.value ? 'rotate-90' : '-rotate-90'}`}
        />
      </div>
      <div q:slot="detail">
        <p class="p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </SfAccordionItem>
  );
});

it('should render the component', () => {
  cy.mount(<TestComponent />);
  cy.get('div .justify-between').should(
    'contain.text',
    'Click me to see the content'
  );
});
