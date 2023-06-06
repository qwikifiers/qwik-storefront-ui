import { PropFunction, Signal } from '@builder.io/qwik';

export type SfDrawerProps = {
  as?: any;
  ref?: Signal<Element | undefined>;
  open: boolean;
  class: string;
  placement?: `${SfDrawerPlacement}`;
  disableClickAway?: boolean;
  disableEsc?: boolean;
  onClose$?: PropFunction<() => false>;
};

export enum SfDrawerPlacement {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}
