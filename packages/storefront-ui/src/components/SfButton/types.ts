import {
  PropFunction,
  QwikIntrinsicElements,
  QwikMouseEvent,
  Signal,
} from '@builder.io/qwik';
import { SfButtonSize, SfButtonVariant } from '../../shared/SfButton';

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
