import { component$ } from '@builder.io/qwik';
import { SfTextarea } from 'qwik-storefront-ui';

export default component$(() => {
  return (
    <>
      <label>
        <span class="typography-text-sm font-medium">Description</span>
        <SfTextarea
          invalid
          placeholder="Write something about yourself..."
          wrapperClass={['w-full block']}
        />
      </label>
      <div class="flex justify-between mt-0.5">
        <p class="typography-text-sm text-negative-700 font-medium">
          The field cannot be empty
        </p>
        <p class="typography-hint-xs text-neutral-500">
          Do not include personal or financial information.
        </p>
      </div>
    </>
  );
});
