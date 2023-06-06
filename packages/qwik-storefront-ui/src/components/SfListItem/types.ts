import { QwikIntrinsicElements, Signal } from '@builder.io/qwik';
import { SfListItemSize } from '../../shared';

export type SfListItemProps = QwikIntrinsicElements['a'] & {
  as?: any;
  ref?: Signal<Element>;
  class?: string;
  size?: `${SfListItemSize}`;
  disabled?: boolean;
  selected?: boolean;
  slotSuffix?: Signal<Element>;
  slotPrefix?: Signal<Element>;
  role?: string;
  showSlotPrefix?: boolean;
  showSlotSuffix?: boolean;
};
