import { QwikIntrinsicElements } from '@builder.io/qwik';

export type SfIconBaseProps = QwikIntrinsicElements['svg'] & {
  size?: `${SfIconSize}`;
};

export enum SfIconSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
}
