export type SfRatingProps = {
  class?: string;
  value?: number;
  max?: number;
  size?: `${SfRatingSize}`;
  halfIncrement?: boolean;
  ariaLabel?: string;
};

export enum SfRatingSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}
