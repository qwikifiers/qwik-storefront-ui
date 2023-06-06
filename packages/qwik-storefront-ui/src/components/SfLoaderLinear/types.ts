import { SfLoaderSize } from '../../shared/SfLoader';

export enum SfLoaderLinearSize {
  minimal = 'minimal',
}

export type SfLoaderLinearProps = {
  class?: string;
  size?: `${SfLoaderSize | SfLoaderLinearSize}`;
  ariaLabel?: string;
};
