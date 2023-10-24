import {
  $,
  QwikChangeEvent,
  component$,
  useContext,
  useTask$,
} from '@builder.io/qwik';
import { SfTextarea, SfTextareaSize } from 'qwik-storefront-ui';
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
          propDefaultValue: SfTextareaSize.base,
          propType: 'SfInputSize',
          options: Object.keys(SfTextareaSize),
          isRequired: false,
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'label',
          isRequired: false,
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'placeholder',
          isRequired: false,
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'helpText',
          isRequired: false,
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'requiredText',
          isRequired: false,
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'errorText',
          isRequired: false,
        },
        {
          type: 'text',
          propType: 'number',
          modelName: 'characterLimit',
          isRequired: false,
        },
        {
          type: 'boolean',
          propType: 'boolean',
          modelName: 'disabled',
          isRequired: false,
        },
        {
          type: 'boolean',
          propType: 'boolean',
          modelName: 'required',
          isRequired: false,
        },
        {
          type: 'boolean',
          propType: 'boolean',
          modelName: 'invalid',
          isRequired: false,
        },
        {
          type: 'boolean',
          propType: 'boolean',
          modelName: 'readonly',
          isRequired: false,
        },
      ] satisfies ControlsType,
      state: {
        size: SfTextareaSize.base,
        disabled: false,
        required: false,
        invalid: false,
        readonly: undefined,
        placeholder: 'Write something about yourself',
        helpText: 'Do not include personal or financial information.',
        requiredText: 'Required text',
        errorText: 'Error message',
        label: 'Description',
        characterLimit: 12,
        value: '',
      },
    };
  });

  const onInputChange = $((event: QwikChangeEvent<HTMLTextAreaElement>) => {
    examplesState.data.state = {
      ...examplesState.data.state,
      value: event.target.value,
    };
  });

  const isAboveLimit = examplesState.data.state.characterLimit
    ? examplesState.data.state.value.length >
      examplesState.data.state.characterLimit
    : false;
  const charsCount = examplesState.data.state.characterLimit
    ? examplesState.data.state.characterLimit -
      examplesState.data.state.value.length
    : null;

  const getCharacterLimitClass = () =>
    isAboveLimit ? 'text-negative-700 font-medium' : 'text-neutral-500';

  return (
    <ComponentExample>
      <label>
        <span
          class={[
            'typography-text-sm font-medium',
            {
              'cursor-not-allowed text-disabled-500':
                examplesState.data.state.disabled,
            },
          ]}
        >
          {examplesState.data.state.label}
        </span>
        <SfTextarea
          name={examplesState.data.state.label}
          size={examplesState.data.state.size}
          value={examplesState.data.state.value}
          invalid={examplesState.data.state.invalid}
          placeholder={examplesState.data.state.placeholder}
          disabled={examplesState.data.state.disabled}
          readOnly={examplesState.data.state.readonly}
          onInput$={onInputChange}
          wrapperClass={[
            `w-full block ${
              examplesState.data.state.disabled
                ? 'bg-disabled-100 ring-disabled-300 ring-1 text-disabled-500'
                : examplesState.data.state.readonly
                ? 'bg-disabled-100 ring-disabled-300 ring-1 text-neutral-500'
                : ''
            }`,
          ]}
        />
      </label>
      <div class="flex justify-between">
        <div>
          {examplesState.data.state.invalid &&
            !examplesState.data.state.disabled && (
              <p class="typography-error-sm text-negative-700 font-medium mt-0.5">
                {examplesState.data.state.errorText}
              </p>
            )}
          {examplesState.data.state.helpText && (
            <p
              class={[
                'typography-hint-xs mt-0.5',
                examplesState.data.state.disabled
                  ? 'text-disabled-500'
                  : 'text-neutral-500',
              ]}
            >
              {examplesState.data.state.helpText}
            </p>
          )}
          {examplesState.data.state.requiredText &&
          examplesState.data.state.required ? (
            <p class="mt-1 typography-text-sm font-normal text-neutral-500 before:content-['*']">
              {examplesState.data.state.requiredText}
            </p>
          ) : null}
        </div>
        {examplesState.data.state.characterLimit &&
        !examplesState.data.state.readonly ? (
          <p
            class={[
              'typography-error-xs mt-0.5',
              examplesState.data.state.disabled
                ? 'text-disabled-500'
                : getCharacterLimitClass(),
            ]}
          >
            {charsCount}
          </p>
        ) : null}
      </div>
    </ComponentExample>
  );
});
