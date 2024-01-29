import { component$, PropsOf, Signal } from '@builder.io/qwik';

export type SfCheckboxProps = {
  ref?: Signal<Element | undefined>;
  invalid?: boolean;
  onChange$?: PropsOf<'button'>['onChange$'];
} & PropsOf<'input'>;

export const SfCheckbox = component$<SfCheckboxProps>(
  ({ invalid, class: _class, ref, onChange$, ...attributes }) => (
    <input
      {...(ref ? { ref } : {})}
      class={[
        'h-[18px] min-w-[18px] border-2 rounded-sm appearance-none cursor-pointer text-gray-500 enabled:hover:border-primary-800 enabled:active:border-primary-900 enabled:hover:checked:text-primary-800 enabled:hover:indeterminate:text-primary-800 enabled:active:checked:text-primary-900 enabled:checked:text-primary-700 checked:bg-checked-checkbox-current border-current indeterminate:bg-indeterminate-checkbox-current enabled:indeterminate:text-primary-700 disabled:text-gray-300 hover:text-gray-300 disabled:cursor-not-allowed enabled:focus-visible:outline enabled:focus-visible:outline-offset',
        invalid
          ? 'border-negative-700 enabled:hover:border-negative-800 enabled:active:border-negative-900'
          : '',
        _class,
      ]}
      type="checkbox"
      data-testid="checkbox"
      onChange$={onChange$}
      {...attributes}
    />
  )
);
