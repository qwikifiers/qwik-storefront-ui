import { component$ } from '@builder.io/qwik';
import { SfBadge, SfButton, SfIconShoppingCart } from 'qwik-storefront-ui';

export default  component$(() => {
  return (
    <div class="flex gap-3">
      <SfButton class="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content={10} />
      </SfButton>

      <SfButton class="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content={10000} />
      </SfButton>

      <SfButton class="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content="New" />
      </SfButton>

      <SfButton class="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge variant="dot" />
      </SfButton>
    </div>
  );
})