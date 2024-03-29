import { component$, useId } from '@builder.io/qwik';
import { SfIconStar, SfIconStarFilled, SfIconStarHalf } from '../SfIcons';
import { SfRatingProps, SfRatingSize } from './types';

const sizeClasses = {
  [SfRatingSize.xs]: 'text-xs',
  [SfRatingSize.sm]: 'text-sm',
  [SfRatingSize.base]: 'text-base',
  [SfRatingSize.lg]: 'text-lg',
  [SfRatingSize.xl]: 'text-xl',
};

export const SfRating = component$<SfRatingProps>(
  ({
    size = SfRatingSize.base,
    max = 5,
    value = 0,
    halfIncrement,
    ariaLabel,
    class: _class,
    ...attributes
  }) => {
    const uniqueId = useId();
    const clamp = (value: number, min: number, max: number) => {
      return Math.min(Math.max(value, min), max);
    };

    const roundToNearest = (value: number, step: number) => {
      return Math.round(value / step) * step;
    };

    const precision = halfIncrement ? 0.5 : 1;
    const ratingValue = clamp(roundToNearest(value, precision), 0, max);
    const partiallyFilled = Number(!Number.isInteger(ratingValue)); // 0 or 1
    const filled = Math.ceil(ratingValue - partiallyFilled);
    const empty = max - filled - partiallyFilled;
    const label = ariaLabel ?? `${value} out of ${max}`;

    return (
      <div
        role="img"
        aria-label={label}
        title={label}
        class={`inline-flex items-center text-warning-500 ${sizeClasses[size]} ${_class}`}
        data-testid="rating"
        {...attributes}
      >
        {[...Array(filled).keys()].map((_, i) => (
          <SfIconStarFilled
            aria-hidden="true"
            class="w-[1.5em] h-[1.5em]"
            key={`${uniqueId}-filled-${i}`}
          />
        ))}
        {Boolean(partiallyFilled) && (
          <SfIconStarHalf aria-hidden="true" class="w-[1.5em] h-[1.5em]" />
        )}
        {[...Array(empty).keys()].map((_, i) => (
          <SfIconStar
            aria-hidden="true"
            class="text-disabled-500 w-[1.5em] h-[1.5em]"
            key={`${uniqueId}-${i}`}
          />
        ))}
      </div>
    );
  }
);
