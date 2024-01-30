import { component$, useSignal } from '@builder.io/qwik';
import { SfSwitch } from 'qwik-storefront-ui';

export default component$(() => {
  const checkedStateSignal = useSignal(false);
  return (
    <SfSwitch
      checked={checkedStateSignal.value}
      value="value-1"
      onChange$={(_, el) => {
        checkedStateSignal.value = el.checked;
      }}
    />
  );
});
