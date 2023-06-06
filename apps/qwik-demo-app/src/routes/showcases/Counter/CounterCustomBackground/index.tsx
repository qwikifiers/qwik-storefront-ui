import { component$ } from '@builder.io/qwik';
import { SfCounter } from 'qwik-storefront-ui';

export default component$(() => {
  return (
    <SfCounter size="lg" pill class="text-white bg-secondary-700 ring-white">
      123
    </SfCounter>
  );
});
