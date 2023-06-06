import { SfProgressSize } from '../../shared/SfProgress';

export enum SfProgressLinearSize {
  'minimal' = 'minimal',
}
export type SfProgressLinearProps = {
  class?: string;
  value?: number;
  size?: `${SfProgressLinearSize | SfProgressSize}`;
  ariaLabel?: string;
};
