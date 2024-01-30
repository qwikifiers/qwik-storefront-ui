import {
  $,
  InputHTMLAttributes,
  QwikChangeEvent,
  component$,
  useContext,
  useTask$,
} from '@builder.io/qwik';
import { SfSwitch } from 'qwik-storefront-ui';
import { ComponentExample } from '../../../components/utils/ComponentExample';
import { ControlsType } from '../../../components/utils/types';
import { EXAMPLES_STATE } from '../layout';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  // TODO check value prop
  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'boolean',
          modelName: 'checked',
          propType: 'boolean',
          description: 'Example of getting values from group of Switches',
        },
        {
          type: 'text',
          modelName: 'value',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          type: 'boolean',
          modelName: 'disabled',
          propType: 'boolean',
        },
        {
          type: 'boolean',
          modelName: 'invalid',
          propType: 'boolean',
        },
      ] satisfies ControlsType,
      state: {
        value: 'value',
        disabled: false,
        checked: false,
        invalid: false,
      },
    };
  });

  const onChange = $((_: Event, el: HTMLInputElement) => {
    const { checked } = el;
    examplesState.data.state = { ...examplesState.data.state, checked };
  });

  return (
    <ComponentExample>
      <SfSwitch {...examplesState.data.state} onChange={onChange} />
    </ComponentExample>
  );
});
