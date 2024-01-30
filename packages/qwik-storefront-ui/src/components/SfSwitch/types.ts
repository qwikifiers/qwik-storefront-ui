import { PropsOf, Signal } from '@builder.io/qwik';

export type SfSwitchProps = PropsOf<'input'> & {
  ref?: Signal<Element | undefined>;
  class?: string;
  invalid?: boolean;
  onChange$: PropsOf<'input'>['onChange$'];
};
