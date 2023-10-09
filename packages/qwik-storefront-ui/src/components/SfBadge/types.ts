export type SfBadgeProps = {
  content?: string | number;
  max?: number;
  placement?: `${SfBadgePlacement}`;
  variant?: `${SfBadgeVariant}`;
}

  export enum SfBadgeVariant {
    standard = 'standard',
    dot = 'dot',
  }
  
  export enum SfBadgePlacement {
    'top-right' = 'top-right',
    'top-left' = 'top-left',
    'bottom-right' = 'bottom-right',
    'bottom-left' = 'bottom-left',
  }