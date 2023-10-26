import { $, component$, useComputed$, useSignal } from '@builder.io/qwik';
import { SfTextarea } from 'qwik-storefront-ui';

interface ChangeEvent<T = HTMLTextAreaElement> {
  target: {
    value: T extends { value: infer V } ? V : T;
  };
}

export default component$(() => {
  const characterLimit = 25;
  const disabled = false;
  const readonly = false;
  const invalid = false;
  const helpText = 'Help text';
  const errorText = 'Error';

  const valueSignal = useSignal('');

  const isAboveLimitSignal = useComputed$(() =>
    characterLimit ? valueSignal.value.length > characterLimit : false
  );

  const charsCountSignal = useComputed$(() =>
    characterLimit ? characterLimit - valueSignal.value.length : null
  );

  const getCharacterLimitClass = () =>
    isAboveLimitSignal.value
      ? 'text-negative-700 font-medium'
      : 'text-neutral-500';

  const onChange = $((event: ChangeEvent) => {
    valueSignal.value = event?.target.value;
  });

  return (
    <>
      <label>
        <span class="text-sm font-medium">Description</span>
        <SfTextarea
          value={valueSignal.value}
          placeholder="Write something about yourself..."
          invalid={invalid}
          disabled={disabled}
          onInput$={onChange}
          wrapperClass={['w-full mt-0.5 block']}
        />
      </label>
      <div class="flex justify-between mt-0.5">
        <div>
          {invalid && !disabled && (
            <p class="typography-text-sm text-negative-700 font-medium mt-0.5">
              {errorText}
            </p>
          )}
          {helpText && (
            <p
              class={[
                'typography-hint-xs',
                disabled ? 'text-disabled-500' : 'text-neutral-500',
              ]}
            >
              {helpText}
            </p>
          )}
        </div>
        {characterLimit && !readonly ? (
          <p
            class={[
              'typography-error-xs',
              disabled ? 'text-disabled-500' : getCharacterLimitClass(),
            ]}
          >
            {charsCountSignal.value}
          </p>
        ) : null}
      </div>
    </>
  );
});
