import { component$, useSignal } from '@builder.io/qwik';
import { SfInput } from 'qwik-storefront-ui';

export default component$(() => {
  const valueSignal = useSignal('value');
  return (
    <>
      <label>
        <span class="text-sm font-medium">Label</span>
        <SfInput
          value={valueSignal.value}
          onChange$={(_: Event, el: HTMLInputElement) => {
            valueSignal.value = el.value;
          }}
          wrapperClass="!bg-disabled-100 !ring-disabled-300 !ring-1"
          readOnly
        />
      </label>
      <div class="flex justify-between">
        <div>
          <p class="text-xs text-neutral-500 mt-0.5">Help Text</p>
        </div>
      </div>
    </>
  );
});
