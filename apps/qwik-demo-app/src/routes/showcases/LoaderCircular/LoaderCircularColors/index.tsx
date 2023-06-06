import { component$ } from '@builder.io/qwik';
import { SfLoaderCircular } from 'qwik-storefront-ui';

export default component$(() => {
  return (
    <div class="flex gap-4 flex-wrap">
      <SfLoaderCircular class="!text-cyan-700" size="2xl" />
      <SfLoaderCircular class="w-12" size="2xl" />
      <SfLoaderCircular class="!ring-yellow-400" size="2xl" />
    </div>
  );
});
