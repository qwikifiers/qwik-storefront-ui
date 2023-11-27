import {
  PropFunction,
  QwikIntrinsicElements,
  QwikMouseEvent,
  Signal,
} from '@builder.io/qwik';

export type SfButtonProps = Omit<QwikIntrinsicElements['button'], 'type'> &
  Omit<QwikIntrinsicElements['a'], 'type'> & {
    as?: any;
    class?: string;
    ref?: Signal<Element | undefined>;
    size?: `${SfButtonSize}`;
    variant?: `${SfButtonVariant}`;
    slotPrefix?: boolean;
    slotSuffix?: boolean;
    disabled?: boolean;
    square?: boolean;
    type?: 'button' | 'reset' | 'submit';
    onClick$?: PropFunction<
      (event: QwikMouseEvent<HTMLButtonElement, MouseEvent>) => void
    >;
  };

export enum SfButtonSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export enum SfButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}
