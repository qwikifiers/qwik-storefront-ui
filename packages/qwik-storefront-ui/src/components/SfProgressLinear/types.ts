import { SfProgressSize } from '../SfProgressCircular';

export enum SfProgressLinearSize {
  'minimal' = 'minimal',
}
export type SfProgressLinearProps = {
  class?: string;
  value?: number;
  size?: `${SfProgressLinearSize | SfProgressSize}`;
  ariaLabel?: string;
};
