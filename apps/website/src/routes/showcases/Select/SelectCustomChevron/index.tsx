import { component$ } from '@builder.io/qwik';
import { SfIconUnfoldMore, SfSelect } from 'qwik-storefront-ui';

const options = [
  { label: 'red', value: 'red' },
  { label: 'blue', value: 'blue' },
  { label: 'yellow', value: 'yellow' },
  { label: 'green', value: 'green' },
  { label: 'gray', value: 'gray' },
  { label: 'black', value: 'black' },
  { label: 'brown', value: 'brown' },
];

export default component$(() => {
  return (
    <label>
      <span class="pb-1 text-sm font-medium text-neutral-900 font-body">
        Label
      </span>
      <SfSelect placeholder="-- Select --" slotChevron={true}>
        <div q:slot="chevron">
          <SfIconUnfoldMore class="absolute pointer-events-none top-2 right-4 text-neutral-500" />
        </div>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </SfSelect>
    </label>
  );
});
