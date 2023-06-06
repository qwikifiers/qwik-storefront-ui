import { SfRatingSize } from '../../shared/SfRating';

export type SfRatingProps = {
  class?: string;
  value?: number;
  max?: number;
  size?: `${SfRatingSize}`;
  halfIncrement?: boolean;
  ariaLabel?: string;
};
