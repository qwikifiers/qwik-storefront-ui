import { component$ } from '@builder.io/qwik';
import { SfBadgePlacement, SfBadgeProps } from './types';

export const SfBadge = component$<SfBadgeProps>(
  ({
  content,
  variant,
  max = 99,
  class: className,
  placement = SfBadgePlacement['top-right'],
  ...attributes
}: SfBadgeProps) => {
  const isDot = variant === 'dot';
  let displayValue = content;
  if (isDot) {
    displayValue = '';
  } else if (!Number.isNaN(content) && Number(content) > max) {
    displayValue = `${max}+`;
  }
  return (
    <span
      class={[
        'block absolute py-0.5 px-1 bg-secondary-700 font-medium text-white text-[8px] leading-[8px] rounded-xl',
        {
          'min-w-[12px] min-h-[12px]': !isDot,
          'w-[10px] h-[10px]': isDot,
          'top-0 right-0 -translate-x-0.5 translate-y-0.5': placement === 'top-right',
          'top-0 left-0 translate-x-0.5 translate-y-0.5': placement === 'top-left',
          'bottom-0 right-0 -translate-x-0.5 -translate-y-0.5': placement === 'bottom-right',
          'bottom-0 left-0 translate-x-0.5 -translate-y-0.5': placement === 'bottom-left',
        },
        className
      ]}
      data-testid="badge"
      {...attributes}
    >
      {displayValue}
    </span>
  );
})
