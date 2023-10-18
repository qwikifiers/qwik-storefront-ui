import {
  PropFunction,
  QwikChangeEvent,
  QwikIntrinsicElements,
  Signal,
} from '@builder.io/qwik';

export type SfInputProps = Omit<
  QwikIntrinsicElements['input'],
  'size' | 'class' | 'children' | 'change'
> & {
  class?: string;
  size?: `${SfInputSize}`;
  invalid?: boolean;
  wrapperClass?: string;
  slotPrefix?: boolean;
  slotSuffix?: boolean;
  ref?: Signal<Element | undefined>;
  onChange$?: PropFunction<(event: QwikChangeEvent<HTMLInputElement>) => void>;
};

export enum SfInputSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
