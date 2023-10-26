import { component$ } from '@builder.io/qwik';
import { SfTextarea } from 'qwik-storefront-ui';

export default component$(() => {
  return (
    <>
      <label>
        <span class="typography-text-sm font-medium">Description</span>
        <SfTextarea
          value="Hello! I'm a passionate shopper and a regular user of this ecommerce platform."
          wrapperClass={[
            'w-full !bg-disabled-100 !ring-disabled-300 !ring-1 block',
          ]}
          readOnly
        />
      </label>
      <p class="typography-hint-xs text-neutral-500 mt-0.5">
        Do not include personal or financial information.
      </p>
    </>
  );
});
