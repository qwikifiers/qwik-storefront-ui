import { PropsOf, Signal } from '@builder.io/qwik';

export type SfRadioProps = PropsOf<'input'> & {
  class?: string;
  ref?: Signal<Element | undefined>;
  invalid?: boolean;
  onChange$?: PropsOf<'input'>['onChange$'];
};
