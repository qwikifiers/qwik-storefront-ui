import { component$ } from '@builder.io/qwik';
import { SfButton } from 'qwik-storefront-ui';

export default component$(() => {
  return (
    <SfButton type="button" class="w-full">
      Hello
    </SfButton>
  );
});
