import { component$ } from '@builder.io/qwik';
import { SfIconBase, SfIconBaseProps, SfIconSize } from '../SfIconBase';
import { SfIconProps } from './types';

export const SfIconError = component$<SfIconBaseProps>(
  ({
    size = SfIconSize.base,
    viewBox = '0 0 24 24',
    ...attributes
  }: SfIconProps) => {
    return (
      <SfIconBase
        {...attributes}
        size={size}
        viewBox={viewBox}
        data-testid="error"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10ZM12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm0 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
        />
      </SfIconBase>
    );
  }
);
