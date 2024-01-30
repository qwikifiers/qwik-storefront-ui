import { PropFunction, PropsOf, Signal } from '@builder.io/qwik';

export type SfModalProps = PropsOf<'modal'> & {
  as: any;
  class?: string;
  ref?: Signal<Element>;
  open: boolean;
  disableClickAway?: boolean;
  disableEsc?: boolean;
  onClose$?: PropFunction<() => void>;
};
