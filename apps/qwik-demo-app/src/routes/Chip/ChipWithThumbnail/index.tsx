import { component$ } from '@builder.io/qwik';
import { SfChip, SfThumbnail } from 'qwik-storefront-ui';

export default component$(() => {
  return (
    <>
      <SfChip size="sm" class="mr-2" showSlotPrefix={true}>
        <div q:slot="prefix">
          <SfThumbnail class="bg-red-500" size="sm" />
        </div>
        Red
      </SfChip>
      <SfChip showSlotPrefix={true}>
        <div q:slot="prefix">
          <SfThumbnail class="bg-secondary-400" size="base" />
        </div>
        Blue
      </SfChip>
    </>
  );
});
