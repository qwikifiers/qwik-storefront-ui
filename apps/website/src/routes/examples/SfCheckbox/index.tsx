import {
  $,
  QwikChangeEvent,
  component$,
  useContext,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import { SfCheckbox } from 'qwik-storefront-ui';
import { ComponentExample } from '../../../components/utils/ComponentExample';
import { ControlsType } from '../../../components/utils/types';
import { EXAMPLES_STATE } from '../layout';

// TODO verify example component
export default component$(() => {
  const checkboxRef = useSignal<Element>();
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'label',
          modelName: 'checkedValue',
          propType: 'string',
          description: 'Example of getting values from group of checkboxes',
        },
        {
          type: 'text',
          modelName: 'value',
          propDefaultValue: '',
          propType: 'string',
          description:
            '(not prop) example allows to add value attribute to input',
        },
        {
          type: 'text',
          modelName: 'label',
          propType: 'string',
          description: 'Text next to thumbnail',
        },
        {
          type: 'boolean',
          modelName: 'indeterminate',
          propType: 'boolean',
          description: '(not prop) example change state to indeterminate',
        },
        {
          type: 'boolean',
          modelName: 'invalid',
          propType: 'boolean',
        },
        {
          type: 'boolean',
          modelName: 'disabled',
          propType: 'boolean',
          description: '(not prop) example showing disabled state',
        },
      ] satisfies ControlsType,
      state: {
        value: 'label',
        label: 'Label',
        indeterminate: false,
        disabled: false,
        invalid: false,
        checkedValue: [],
      },
    };
  });

  useTask$(({ track }) => {
    track(() => examplesState.data.state);
    if (checkboxRef.value === null) return;
    examplesState.data.state.invalid
      ? checkboxRef.value?.setAttribute('indeterminate', 'false')
      : checkboxRef.value?.setAttribute(
          'indeterminate',
          examplesState.data.state.indeterminate
        );
  });

  const onChange = $((_: Event, el: HTMLInputElement) => {
    const { value } = el;
    examplesState.data.state =
      examplesState.data.state.checkedValue.indexOf(value) > -1
        ? {
            ...examplesState.data.state,
            checkedValue: examplesState.data.state.checkedValue.filter(
              (val: string) => val !== value
            ),
          }
        : {
            ...examplesState.data.state,
            checkedValue: [...examplesState.data.state.checkedValue, value],
          };
  });

  return (
    <ComponentExample class="min-h-96">
      <div class="flex items-center">
        <SfCheckbox
          value={examplesState.data.state.value}
          disabled={examplesState.data.state.disabled}
          invalid={
            !examplesState.data.state.disabled &&
            examplesState.data.state.invalid
          }
          ref={checkboxRef}
          onChange$={onChange}
          class="peer"
          id="checkbox"
        />
        <label
          for="checkbox"
          class="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900"
        >
          {examplesState.data.state.label}
        </label>
      </div>
    </ComponentExample>
  );
});
