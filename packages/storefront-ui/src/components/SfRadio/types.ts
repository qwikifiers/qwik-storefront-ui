import {
  PropFunction,
  QwikChangeEvent,
  QwikIntrinsicElements,
  Signal,
} from '@builder.io/qwik';

export type SfRadioProps = Omit<QwikIntrinsicElements['input'], 'children'> & {
  class?: string;
  ref?: Signal<Element | undefined>;
  invalid?: boolean;
  onChange$: PropFunction<(event: QwikChangeEvent<HTMLInputElement>) => void>;
};
