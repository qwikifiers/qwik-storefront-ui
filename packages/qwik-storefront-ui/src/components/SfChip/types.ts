import {
  PropFunction,
  QwikChangeEvent,
  QwikIntrinsicElements,
  Signal,
} from '@builder.io/qwik';

export type SfChipProps = {
  ref?: Signal<Element | undefined>;
  class?: string;
  size?: `${SfChipSize}`;
  square?: boolean;
  inputProps?: QwikIntrinsicElements['input'];
  slotPrefix?: boolean;
  slotSuffix?: boolean;
  onChange$?: PropFunction<(event: QwikChangeEvent<HTMLInputElement>) => void>;
};

export enum SfChipSize {
  sm = 'sm',
  base = 'base',
}
