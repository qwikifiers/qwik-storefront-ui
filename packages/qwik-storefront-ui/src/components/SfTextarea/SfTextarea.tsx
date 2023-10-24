import { component$, useSignal } from '@builder.io/qwik';
import { SfTextareaSize, type SfTextareaProps } from './types';

const sizeClasses = {
  [SfTextareaSize.sm]: 'h-[56px] py-[6px] pl-4 pr-3',
  [SfTextareaSize.base]: 'h-[64px] py-2 pl-4 pr-3',
  [SfTextareaSize.lg]: 'h-[72px], p-3 pl-4',
};

export const SfTextarea = component$<SfTextareaProps>(
  ({
    size = SfTextareaSize.base,
    invalid = false,
    wrapperClass,
    ...attributes
  }) => {
    const ref = useSignal<HTMLTextAreaElement>();

    return (
      <textarea
        ref={ref}
        class={[
          'px-4 bg-white rounded-md text-neutral-900  ring-inset hover:ring-primary-800 focus:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 outline-none',
          {
            'ring-2 ring-negative-700': invalid,
            'ring-1 ring-neutral-200': !invalid,
          },
          sizeClasses[size],
          wrapperClass,
        ]}
        {...attributes}
        data-testid="textarea"
      />
    );
  }
);
