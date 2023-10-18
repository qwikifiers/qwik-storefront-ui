import { SfBadge, SfButton, SfIconShoppingCart } from 'qwik-storefront-ui';

export default function BadgePlacement() {
  return (
    <div class="flex gap-3">
      <SfButton class="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content={100} max={99} placement="top-right" />
      </SfButton>

      <SfButton class="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content={100} max={99} placement="bottom-right" />
      </SfButton>

      <SfButton class="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content={100} max={99} placement="top-left" />
      </SfButton>

      <SfButton class="relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge content={100} max={99} placement="bottom-left" />
      </SfButton>
    </div>
  );
}
