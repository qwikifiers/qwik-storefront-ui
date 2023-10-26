import { component$ } from '@builder.io/qwik';
import { SfTextarea } from 'qwik-storefront-ui';

export default component$(() => {
  return (
    <>
      <label>
        <span class="typography-text-sm font-medium cursor-not-allowed text-disabled-900">
          Description
        </span>
        <SfTextarea
          disabled
          placeholder="Write something about yourself..."
          wrapperClass={[
            'w-full !bg-disabled-100 !ring-disabled-300 !ring-1 block',
          ]}
        />
      </label>
      <p class="typography-hint-xs text-disabled-500  mt-0.5">
        Do not include personal or financial information.
      </p>
    </>
  );
});
