import { component$, useContext, useSignal, useTask$ } from '@builder.io/qwik';
import {
  SfButton,
  SfButtonSize,
  SfButtonVariant,
  SfIconLock,
  SfIconSearch,
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
          description: 'Only for demonstration purposes. Default slot',
        },
        {
          type: 'select',
          modelName: 'slotPrefix',
          description: 'slotPrefix',
          options: prefixSlotOptions.controlsOptions,
        },
        {
          type: 'select',
          modelName: 'slotSuffix',
          description: 'slotSuffix',
          options: suffixSlotOptions.controlsOptions,
        },
        {
          type: 'text',
          modelName: 'as',
          description: 'Change button tag to a tag or any other tag',
        },
        {
          type: 'select',
          modelName: 'variant',
          options: Object.keys(SfButtonVariant),
        },
        {
          type: 'select',
          modelName: 'size',
          options: Object.keys(SfButtonSize),
        },
        {
          type: 'boolean',
          modelName: 'disabled',
          description: 'Disabled state',
        },
        {
          type: 'boolean',
          modelName: 'square',
          description: 'Remove border radius',
        },
      ] satisfies ControlsType,
      state: {
        slot: 'Hello',
        disabled: undefined,
        variant: SfButtonVariant.primary,
        size: SfButtonSize.base,
        slotPrefix: false,
        slotSuffix: false,
        square: undefined,
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
        slotPrefix={selectPrefix.value}
        slotSuffix={selectSuffix.value}
        {...examplesState.data.state}
        class="max-w-[200px]"
      >
        <div q:slot="prefix">
          <SfIconSearch />
        </div>

        <div q:slot="suffix">
          <SfIconLock />
        </div>
        {examplesState.data.state.slot}
      </SfButton>
    </ComponentExample>
  );
});
