import { component$, useSignal } from '@builder.io/qwik';
import { SfRadio } from 'qwik-storefront-ui';

const radioOptions = [
  {
    value: 'value-1',
    name: 'radio-1',
  },
  {
    value: 'value-2',
    name: 'radio-2',
  },
];
export default component$(() => {
  const checkedStateSignal = useSignal('');
  return (
    <>
      {radioOptions.map(({ name, value }, index) => (
        <SfRadio
          key={index}
          name={name}
          value={value}
          class="block mb-4"
          checked={checkedStateSignal.value === value}
          onChange$={(_, el) => {
            checkedStateSignal.value = el.value;
          }}
        />
      ))}
    </>
  );
});
