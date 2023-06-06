import {
  PropFunction,
  QwikChangeEvent,
  QwikIntrinsicElements,
  Signal,
} from '@builder.io/qwik';

export type SfSwitchProps = Omit<QwikIntrinsicElements['input'], 'children'> & {
  ref?: Signal<Element | undefined>;
  class?: string;
  invalid?: boolean;
  onChange$: PropFunction<(event: QwikChangeEvent<HTMLInputElement>) => void>;
};
