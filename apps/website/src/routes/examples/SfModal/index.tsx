import { component$, useContext, useSignal, useTask$ } from '@builder.io/qwik';
import {
  SfButton,
  SfIconClose,
  SfIconLock,
  SfIconSearch,
  SfModal,
} from 'qwik-storefront-ui';
import { ComponentExample } from '../../../components/utils/ComponentExample';
import { createControlsOptions } from '../../../components/utils/ControlsOptions';
import { ControlsType } from '../../../components/utils/types';
import { EXAMPLES_STATE } from '../layout';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Search icon': <SfIconSearch />,
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Lock icon': <SfIconLock />,
});

export default component$(() => {
  const selectPrefix = useSignal<boolean>();
  const selectSuffix = useSignal<boolean>();

  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'text',
          modelName: 'slot',
          description:
            'Only for demonstration purposes. Default slot, replaces example modal content',
        },
        {
          type: 'boolean',
          modelName: 'open',
          propType: 'boolean',
          isRequired: true,
          description: 'If true modal is visible',
        },
        {
          type: 'boolean',
          modelName: 'disableClickAway',
          propType: 'boolean',
          isRequired: true,
          description:
            "If true can't close modal when clicking outside of modal",
        },
        {
          type: 'boolean',
          modelName: 'disableEsc',
          propType: 'boolean',
          isRequired: true,
          description:
            "If true can't close modal drawer when using ESC keyboard button",
        },
      ] satisfies ControlsType,
      state: {
        slot: 'Hello',
        open: false,
        disableClickAway: false,
        disableEsc: false,
      },
    };
  });

  useTask$(({ track }) => {
    track(() => examplesState.data.state);
    if (selectPrefix.value === null) return;
    selectPrefix.value = prefixSlotOptions.getValue(
      examplesState.data.state.slotPrefix
    );
  });

  useTask$(({ track }) => {
    track(() => examplesState.data.state);
    if (selectSuffix.value === null) return;
    selectSuffix.value = suffixSlotOptions.getValue(
      examplesState.data.state.slotSuffix
    );
  });

  return (
    <ComponentExample componentContainerClass="space-x-2">
      <SfButton
        type="button"
        preventdefault:click
        onClick$={() => {
          examplesState.data.state.open = true;
          console.log('value from button:', examplesState.data.state.open);
        }}
      >
        To Checkout
      </SfButton>

      <SfModal
        open={examplesState.data.state.open}
        disableClickAway={examplesState.data.state.disableClickAway}
        disableEsc={examplesState.data.state.disableEsc}
        onClose$={() => {
          examplesState.data.state.open = false;
        }}
        class="max-w-[90%] md:max-w-lg"
        as="section"
        role="alertdialog"
        aria-labelledby="promoModalTitle"
        aria-describedby="promoModalDesc"
      >
        <header>
          <SfButton
            square
            variant="tertiary"
            class="absolute right-2 top-2"
            onClick$={() => {
              examplesState.data.state.open = false;
            }}
          >
            <SfIconClose />
          </SfButton>
          <h3
            id="promoModalTitle"
            class="font-bold typography-headline-4 md:typography-headline-3"
          >
            You might miss out on great deals
          </h3>
        </header>
        <p id="promoModalDesc" class="mt-2">
          There are special offers for some of the items on your wishlist. Do
          you want to see these deals before proceeding to checkout page?
        </p>
        <footer class="flex justify-end gap-4 mt-4">
          <SfButton
            type="button"
            variant="secondary"
            onClick$={() => {
              examplesState.data.state.open = false;
            }}
          >
            Skip
          </SfButton>
          <SfButton
            type="button"
            onClick$={() => {
              examplesState.data.state.open = false;
            }}
          >
            Yes!
          </SfButton>
        </footer>
      </SfModal>
    </ComponentExample>
  );
});
