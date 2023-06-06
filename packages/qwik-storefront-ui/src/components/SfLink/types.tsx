import { QwikIntrinsicElements, Signal } from '@builder.io/qwik';
import { SfLinkVariant } from '../../shared';

export type SfLinkProps = QwikIntrinsicElements['a'] & {
  as?: any;
  ref?: Signal<Element | undefined>;
  class?: string;
  variant?: `${SfLinkVariant}`;
};
