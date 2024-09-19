import { $, QwikChangeEvent, component$, useSignal } from '@builder.io/qwik';
import { SfIconStar, SfIconStarFilled } from 'qwik-storefront-ui';
import { SfIconSize } from '../SfIconBase';
import {
  SfRatingButtonProps,
  SfRatingButtonRenderProps,
  SfRatingButtonSize,
} from './types';

function defaultLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}`;
}

const renderDefaultIcon = ({
  isFilled,
  iconSize,
}: SfRatingButtonRenderProps) => {
  if (isFilled) {
    return (
      <SfIconStarFilled
        role="none"
        class="text-primary-700 cursor-pointer peer-disabled:cursor-default peer-disabled:text-disabled-500 peer-focus-visible:outline"
        size={iconSize}
      />
    );
  }
  return (
    <SfIconStar
      role="none"
      class="text-neutral-500 cursor-pointer peer-disabled:cursor-default peer-disabled:text-disabled-500 peer-focus-visible:outline"
      size={iconSize}
    />
  );
};

const iconSize: Record<
  SfRatingButtonSize,
  SfRatingButtonRenderProps['iconSize']
> = {
  [SfRatingButtonSize.sm]: SfIconSize.base,
  [SfRatingButtonSize.base]: SfIconSize.lg,
  [SfRatingButtonSize.lg]: SfIconSize.xl,
};

export const SfRatingButton = component$<SfRatingButtonProps>(
  ({
    size = SfRatingButtonSize.base,
    max = 5,
    value = 0,
    class: _class,
    getLabelText = defaultLabelText,
    name = 'sf-rating-button',
    disabled = false,
    onChange$,
    children = renderDefaultIcon,
    ...attributes
  }) => {
    const hover = useSignal(0);
    const icons = Array.from(
      { length: Math.floor(Math.abs(max)) },
      (_, index) => index + 1
    );
    const isIconFilled = (ratingValue: number) =>
      ratingValue <= hover.value || (hover.value === 0 && ratingValue <= value);

    const handleChange = $((_: Event, element: HTMLInputElement) => {
      onChange$?.(Number(element.value));
    });

    const handleHoverIn = (ratingValue: number) =>
      $(() => {
        if (!disabled) {
          hover.value = ratingValue;
        }
      });

    const handleHoverOut = $(() => {
      if (!disabled) {
        hover.value = 0;
      }
    });

    return (
      <div
        role="radiogroup"
        class={`${_class} flex`}
        data-testid="ratingbutton"
        {...attributes}
      >
        {icons.map((ratingValue) => (
          <label
            key={ratingValue}
            onMouseEnter$={handleHoverIn(ratingValue)}
            onMouseLeave$={handleHoverOut}
          >
            <input
              type="radio"
              name={name}
              value={ratingValue}
              checked={ratingValue === value}
              onChange$={handleChange}
              disabled={disabled}
              aria-label={getLabelText(ratingValue).toString()}
              class="sr-only peer"
            />
            {children({
              isFilled: isIconFilled(ratingValue),
              max,
              iconSize: iconSize[size],
            })}
          </label>
        ))}
      </div>
    );
  }
);
