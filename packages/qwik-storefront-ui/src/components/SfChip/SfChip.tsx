import { Slot, component$, useId } from '@builder.io/qwik';
import { SfChipProps, SfChipSize } from './types';

export const SfChip = component$<SfChipProps>(
  ({
    size = SfChipSize.base,
    class: _class,
    slotPrefix,
    slotSuffix,
    inputProps,
    square = false,
    ref,
    ...attributes
  }: SfChipProps) => {
    const chipId = useId();
    const paddingForSize = (
      size: `${SfChipSize}`,
      square: boolean,
      slotPrefix: boolean,
      slotSuffix: boolean
    ) => {
      switch (size) {
        case SfChipSize.sm:
          return square
            ? 'px-1.5'
            : [slotPrefix ? 'pl-1.5' : 'pl-3', slotSuffix ? 'pr-1.5' : 'pr-3'];
        default:
          return square
            ? 'px-2'
            : [slotPrefix ? 'pl-2' : 'pl-4', slotSuffix ? 'pr-2' : 'pr-4'];
      }
    };
    const getSizeClasses = (size: SfChipProps['size']) => {
      switch (size) {
        case SfChipSize.sm:
          return `text-sm py-1.5 gap-1.5`;
        default:
          return 'text-base py-2 gap-2';
      }
    };

    const getCheckedClasses = (checked: boolean | undefined) => {
      return checked
        ? 'ring-2 ring-primary-700 hover:ring-primary-700'
        : ' hover:ring-primary-200 ring-neutral-200';
    };

    const getDisabledClasses = (disabled: boolean | undefined) => {
      return disabled
        ? 'cursor-not-allowed bg-disabled-100 opacity-50 ring-1 ring-disabled-200 hover:ring-disabled-200'
        : 'hover:bg-primary-100 cursor-pointer';
    };

    return (
      <>
        <input
          id={chipId}
          {...(ref ? { ref } : {})}
          class="hidden"
          type="checkbox"
          {...inputProps}
        />
        <label
          for={chipId}
          class={[
            'ring-1 ring-inset rounded-full inline-flex items-center transition duration-200 justify-center outline-offset-2 outline-secondary-600  focus-visible:outline',
            getCheckedClasses(inputProps?.checked),
            getDisabledClasses(inputProps?.disabled),
            getSizeClasses(size),
            paddingForSize(size, square, !!slotPrefix, !!slotSuffix),
            _class,
          ]}
          data-testid="chip"
          {...attributes}
        >
          {slotPrefix && <Slot name="prefix" />}
          <Slot />
          {slotSuffix && <Slot name="suffix" />}
        </label>
      </>
    );
  }
);
