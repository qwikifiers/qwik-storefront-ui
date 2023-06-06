import { QwikIntrinsicElements, Signal } from '@builder.io/qwik';
import { SfChipSize } from '../../shared';

export type SfChipProps = {
  ref?: Signal<Element | undefined>;
  class?: string;
  size?: `${SfChipSize}`;
  square?: boolean;
  inputProps?: QwikIntrinsicElements['input'];
  showSlotPrefix?: boolean;
  showSlotSuffix?: boolean;
};
