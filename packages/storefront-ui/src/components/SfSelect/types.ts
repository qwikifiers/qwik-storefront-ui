import {
  PropFunction,
  QwikChangeEvent,
  QwikIntrinsicElements,
} from '@builder.io/qwik';
import { SfSelectSize } from '../../shared/SfSelect';

export type SfSelectProps = Omit<QwikIntrinsicElements['select'], 'size'> & {
  class?: string;
  size?: `${SfSelectSize}`;
  invalid?: boolean;
  wrapperClass?: string;
  showSlotChevron?: boolean;
  onChange$?: PropFunction<(event: QwikChangeEvent<HTMLSelectElement>) => void>;
};
