export type SfCounterProps = {
  size?: `${SfCounterSize}`;
  pill?: boolean;
  class?: string;
};

export enum SfCounterSize {
  '3xs' = '3xs',
  '2xs' = '2xs',
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
