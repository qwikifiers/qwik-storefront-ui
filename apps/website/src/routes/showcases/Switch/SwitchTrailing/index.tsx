import { component$, useSignal } from '@builder.io/qwik';
import { SfSwitch } from 'qwik-storefront-ui';

export default component$(() => {
  const checkedStateSignal = useSignal(false);
  return (
    <>
      <label class="flex items-center justify-between">
        <span class="text-base text-gray-900 cursor-pointer font-body">
          Label
        </span>
        <SfSwitch
          checked={checkedStateSignal.value}
          value="value-1"
          onChange$={(_, el) => {
            checkedStateSignal.value = el.checked;
          }}
        />
      </label>
      <span class="text-xs mt-0.5 block text-gray-500">Help text</span>
    </>
  );
});
