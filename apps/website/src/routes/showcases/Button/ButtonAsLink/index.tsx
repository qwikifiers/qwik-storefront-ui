import { component$ } from '@builder.io/qwik';
import { SfButton } from 'qwik-storefront-ui';

export default component$(() => {
  return (
    <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <SfButton as="a" href="/">
        Link
      </SfButton>
    </div>
  );
});
