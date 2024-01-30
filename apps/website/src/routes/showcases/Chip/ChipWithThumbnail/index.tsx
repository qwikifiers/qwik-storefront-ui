import { component$ } from '@builder.io/qwik';
import { SfChip, SfThumbnail } from 'qwik-storefront-ui';

export default component$(() => {
  return (
    <>
      <div>
        <SfChip size="sm" class="mr-2" slotPrefix={true}>
          <div q:slot="prefix">
            <SfThumbnail class="bg-red-500" size="sm" />
          </div>
          Red
        </SfChip>
        <SfChip slotPrefix={true}>
          <div q:slot="prefix">
            <SfThumbnail class="bg-secondary-400" size="base" />
          </div>
          Blue
        </SfChip>
      </div>

      <div class="my-5">
        <SfChip size="sm" class="mr-2" slotSuffix={true}>
          <div q:slot="suffix">
            <SfThumbnail class="bg-red-500" size="sm" />
          </div>
          Red
        </SfChip>
        <SfChip slotSuffix={true}>
          <div q:slot="suffix">
            <SfThumbnail class="bg-secondary-400" size="base" />
          </div>
          Blue
        </SfChip>
      </div>
    </>
  );
});
