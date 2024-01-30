import { component$, useSignal } from '@builder.io/qwik';
import { SfSwitch } from 'qwik-storefront-ui';

export default component$(() => {
  const checkedStateSignal = useSignal(false);
  return (
    <>
      <label class="flex items-center">
        <SfSwitch
          checked={checkedStateSignal.value}
          value="value-1"
          onChange$={(_, el) => {
            checkedStateSignal.value = el.checked;
          }}
        />
        <span class="text-base ml-[10px] text-gray-900 cursor-pointer font-body">
          Label
        </span>
      </label>
      <span class="text-xs mt-0.5 ml-12 block text-gray-500">Help text</span>
    </>
  );
});
