import { component$ } from '@builder.io/qwik';
import { SfChip } from 'qwik-storefront-ui';

export default component$(() => {
  return (
    <div>
      <SfChip size="sm" class="mr-2">
        Small
      </SfChip>
      <SfChip size="base" class="mr-2">
        Base
      </SfChip>
      <SfChip>Default</SfChip>
    </div>
  );
});
