import {
  CSSProperties,
  PropFunction,
  QwikIntrinsicElements,
} from '@builder.io/qwik';

export type SfTextareaProps = Omit<
  QwikIntrinsicElements['textarea'],
  'size'
> & {
  onInput$?: PropFunction<(event: Event) => void>;
  size?: `${SfTextareaSize}`;
  invalid?: boolean;
  wrapperClass?: string[];
  style?: CSSProperties;
};

export enum SfTextareaSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
