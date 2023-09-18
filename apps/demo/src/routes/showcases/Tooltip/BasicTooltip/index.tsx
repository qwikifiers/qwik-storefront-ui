import { component$ } from '@builder.io/qwik';
import { SfTooltip } from 'qwik-storefront-ui';

export default component$(() => {
  return (
    <SfTooltip label="This is a tooltip!">
      <span>Hover me!</span>
    </SfTooltip>
  );
});
