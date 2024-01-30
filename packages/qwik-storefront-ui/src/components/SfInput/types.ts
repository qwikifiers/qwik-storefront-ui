import { PropsOf, Signal } from '@builder.io/qwik';

export type SfInputProps = Omit<PropsOf<'input'>, 'size' | 'children'> & {
  class?: string;
  size?: `${SfInputSize}`;
  invalid?: boolean;
  wrapperClass?: string;
  slotPrefix?: boolean;
  slotSuffix?: boolean;
  ref?: Signal<Element | undefined>;
  onChange$?: PropsOf<'input'>['onChange$'];
};

export enum SfInputSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
