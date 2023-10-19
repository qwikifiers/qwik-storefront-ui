import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfLoaderLinear, SfLoaderSize } from 'qwik-storefront-ui';
import { ComponentExample } from '../../../components/utils/ComponentExample';
import { ControlsType } from '../../../components/utils/types';
import { EXAMPLES_STATE } from '../layout';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'select',
          modelName: 'size',
          propType: 'SfLoaderSize',
          options: [...Object.keys(SfLoaderSize)],
          description: 'sets sizes of components',
        },
        {
          type: 'text',
          modelName: 'ariaLabel',
          propType: 'string',
          propDefaultValue: 'loading',
          description: 'sets text available for screen readers',
        },
      ] satisfies ControlsType,
      state: {
        size: SfLoaderSize.lg,
        ariaLabel: 'loading',
      },
    };
  });

  return (
    <ComponentExample>
      <SfLoaderLinear class="w-12" {...examplesState.data.state} />
    </ComponentExample>
  );
});
