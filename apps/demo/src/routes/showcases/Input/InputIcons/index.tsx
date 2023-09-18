import { component$ } from '@builder.io/qwik';
import { SfIconLockOpen, SfIconPerson, SfInput } from 'qwik-storefront-ui';

export default component$(() => {
  return (
    <label>
      <span class="text-sm font-medium">Label</span>
      <SfInput showSlotPrefix={true} showSlotSuffix={true}>
        <div q:slot="prefix">
          <SfIconPerson />
        </div>
        <div q:slot="suffix">
          <SfIconLockOpen />
        </div>
      </SfInput>
    </label>
  );
});
