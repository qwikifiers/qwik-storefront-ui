import {
  PropFunction,
  QwikChangeEvent,
  QwikIntrinsicElements,
} from '@builder.io/qwik';

export type SfSelectProps = Omit<QwikIntrinsicElements['select'], 'size'> & {
  class?: string;
  size?: `${SfSelectSize}`;
  invalid?: boolean;
  wrapperClass?: string;
  showSlotChevron?: boolean;
  onChange$?: PropFunction<(event: QwikChangeEvent<HTMLSelectElement>) => void>;
};

export enum SfSelectSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
