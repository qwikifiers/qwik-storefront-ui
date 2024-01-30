import { Slot, component$ } from '@builder.io/qwik';
import { SfInputProps, SfInputSize } from './types';

const sizeClasses = {
  [SfInputSize.sm]: 'py-1.5 px-4',
  [SfInputSize.base]: 'py-2 px-4',
  [SfInputSize.lg]: 'py-3 px-4',
};

export const SfInput = component$<SfInputProps>(
  ({
    value,
    onChange$,
    size = SfInputSize.base,
    invalid,
    slotPrefix,
    slotSuffix,
    class: _class,
    wrapperClass,
    ref,
  }) => {
    return (
      <div
        class={[
          'flex items-center bg-white rounded-md ring-inset text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2',
          sizeClasses[size],
          invalid ? 'ring-2 ring-negative-700' : 'ring-1 ring-neutral-200',
          wrapperClass,
        ]}
        data-testid="input"
      >
        {slotPrefix && (
          <span class="pr-2">
            <Slot name="prefix" />
          </span>
        )}
        <input
          class={[
            'min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent',
            _class,
          ]}
          type="text"
          data-testid="input-field"
          size={1}
          value={value}
          {...(ref ? { ref } : {})}
          onChange$={onChange$}
        />
        {slotSuffix && (
          <span class="pl-2">
            <Slot name="suffix" />
          </span>
        )}
      </div>
    );
  }
);
