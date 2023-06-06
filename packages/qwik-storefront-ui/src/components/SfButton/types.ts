import {
  PropFunction,
  QwikIntrinsicElements,
  QwikMouseEvent,
  Signal,
} from '@builder.io/qwik';

export type SfButtonProps = QwikIntrinsicElements['button'] &
  QwikIntrinsicElements['a'] & {
    as?: any;
    ref?: Signal<Element | undefined>;
    size?: `${SfButtonSize}`;
    variant?: `${SfButtonVariant}`;
    square?: boolean;
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
