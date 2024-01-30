import {
  $,
  component$,
  useContext,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import {
  SfRatingButton,
  SfRatingButtonSize,
  SfRatingSize,
} from 'qwik-storefront-ui';
import { ComponentExample } from '../../../components/utils/ComponentExample';
import { ControlsType } from '../../../components/utils/types';
import { EXAMPLES_STATE } from '../layout';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  const maxValue = useSignal(5);
  const selectedValue = useSignal(0);

  useTask$(({ track }) => {
    track(() => {
      maxValue.value, selectedValue.value;
    });
    examplesState.data = {
      controls: [
        {
          type: 'range',
          modelName: 'modelValue',
          propDefaultValue: 0,
          propType: 'number',
          options: [
            {
              bind: {
                min: 0,
                max: maxValue.value,
                step: 1,
                modelValue: selectedValue.value,
              },
            },
          ],
        },
        {
          type: 'range',
          modelName: 'max',
          propDefaultValue: 5,
          propType: 'number',
          options: [
            {
              bind: {
                min: 1,
                step: 1,
                max: 10,
              },
            },
          ],
        },
        {
          type: 'select',
          modelName: 'size',
          options: Object.values(SfRatingButtonSize),
          propDefaultValue: SfRatingButtonSize.base,
          propType: 'SfRatingButtonSize',
        },
        {
          type: 'boolean',
          modelName: 'disabled',
          propDefaultValue: 'false',
          propType: 'boolean',
          isRequired: false,
        },
      ] satisfies ControlsType,
      state: {
        modelValue: selectedValue.value,
        max: maxValue.value,
        size: SfRatingSize.base,
        disabled: false,
      },
    };
  });

  useTask$(({ track }) => {
    track(() => examplesState.data.state.max);
    maxValue.value = examplesState.data.state.max || 5;
  });

  useTask$(({ track }) => {
    track(() => examplesState.data.state.modelValue);
    selectedValue.value = examplesState.data.state.modelValue;
  });

  const onChange = $((value: number) => {
    examplesState.data.state.modelValue = value;
  });

  return (
    <ComponentExample>
      <SfRatingButton
        value={Number(examplesState.data.state.modelValue)}
        max={Number(examplesState.data.state.max)}
        size={examplesState.data.state.size}
        disabled={examplesState.data.state.disabled}
        onChange$={onChange}
      />
    </ComponentExample>
  );
});
