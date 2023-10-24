import { CSSProperties, QwikIntrinsicElements } from '@builder.io/qwik';

export type SfTextareaProps = Omit<
  QwikIntrinsicElements['textarea'],
  'size'
> & {
  size?: `${SfTextareaSize}`;
  invalid?: boolean;
  className?: string;
  style?: CSSProperties;
};

export enum SfTextareaSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
