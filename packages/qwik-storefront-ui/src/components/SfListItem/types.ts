import { QwikIntrinsicElements, Signal } from '@builder.io/qwik';

export type SfListItemProps = QwikIntrinsicElements['a'] & {
  as?: any;
  ref?: Signal<Element>;
  class?: string;
  size?: `${SfListItemSize}`;
  disabled?: boolean;
  selected?: boolean;
  role?: string;
  slotPrefix?: boolean;
  slotSuffix?: boolean;
};

export enum SfListItemSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
