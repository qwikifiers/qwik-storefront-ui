import { QwikIntrinsicElements } from '@builder.io/qwik';
import { SfIconSize } from '../../shared';

export type SfIconBaseProps = QwikIntrinsicElements['svg'] & {
  size?: `${SfIconSize}`;
};
