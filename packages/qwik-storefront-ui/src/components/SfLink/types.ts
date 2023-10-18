import { QwikIntrinsicElements, Signal } from '@builder.io/qwik';

export type SfLinkProps = QwikIntrinsicElements['a'] & {
  as?: any;
  ref?: Signal<Element | undefined>;
  class?: string;
  variant?: `${SfLinkVariant}`;
};

export enum SfLinkVariant {
  primary = 'primary',
  secondary = 'secondary',
}
