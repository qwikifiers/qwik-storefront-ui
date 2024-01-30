import { PropsOf, Signal } from '@builder.io/qwik';

export type SfChipProps = {
  ref?: Signal<Element | undefined>;
  class?: string;
  size?: `${SfChipSize}`;
  square?: boolean;
  inputProps?: PropsOf<'input'>;
  slotPrefix?: boolean;
  slotSuffix?: boolean;
  onChange$?: PropsOf<'button'>['onChange$'];
};

export enum SfChipSize {
  sm = 'sm',
  base = 'base',
}
