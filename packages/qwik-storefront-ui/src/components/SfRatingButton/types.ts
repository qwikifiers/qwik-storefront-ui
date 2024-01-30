import { SfIconSize } from 'qwik-storefront-ui';

export interface SfRatingButtonRenderProps {
  isFilled: boolean;
  max: number;
  iconSize: Extract<`${SfIconSize}`, 'base' | 'lg' | 'xl'>;
}

export interface SfRatingButtonProps {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  name?: string;
  disabled?: boolean;
  class?: string;
  size?: `${SfRatingButtonSize}`;
  getLabelText?: (value: number) => string;
  children?: (state: SfRatingButtonRenderProps) => SlotAssignmentMode;
}

export enum SfRatingButtonSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
