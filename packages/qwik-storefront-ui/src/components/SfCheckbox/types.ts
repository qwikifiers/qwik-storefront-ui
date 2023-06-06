import {
  PropFunction,
  QwikChangeEvent,
  QwikIntrinsicElements,
  Signal,
} from '@builder.io/qwik';

export type SfCheckboxProps = Omit<
  QwikIntrinsicElements['input'],
  'children'
> & {
  ref?: Signal<Element | undefined>;
  invalid?: boolean;
  onChange$?: PropFunction<(event: QwikChangeEvent<HTMLInputElement>) => void>;
};
