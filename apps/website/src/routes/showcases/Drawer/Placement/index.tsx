import { $, component$, useSignal } from '@builder.io/qwik';
import type { SfDrawerProps } from 'qwik-storefront-ui';
import { SfButton, SfDrawer, SfDrawerPlacement } from 'qwik-storefront-ui';

export default component$(() => {
  const openSignal = useSignal(false);
  const placementSignal = useSignal<SfDrawerProps['placement']>(
    SfDrawerPlacement.left
  );

  const changePlacement = $((_: Event, el: HTMLSelectElement) => {
    placementSignal.value = el.value as SfDrawerProps['placement'];
  });

  return (
    <>
      <label>
        Placement
        <select
          onChange$={changePlacement}
          class="border-2 border-primary-700 mx-2 p-2 rounded"
        >
          <option value="top">top</option>
          <option value="right">right</option>
          <option value="bottom">bottom</option>
          <option value="left">left</option>
        </select>
      </label>
      <SfButton
        onClick$={() => {
          openSignal.value = true;
        }}
        type="button"
      >
        Open Drawer
      </SfButton>

      <SfDrawer
        open={openSignal.value}
        onClose$={$(() => (openSignal.value = false))}
        placement={placementSignal.value}
        class={`bg-neutral-50 p-3 border border-gray-300 
        ${
          placementSignal.value === SfDrawerPlacement.left ||
          placementSignal.value === SfDrawerPlacement.right
            ? 'max-w-[370px]'
            : ''
        }`}
      >
        <div>
          <p class="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            consequatur repellat, odit voluptatibus deserunt eligendi nemo
            perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut
            labore facilis minima debitis dolore.
          </p>
          <strong>
            You can close Drawer by clicking outside or focus and use ESC button
          </strong>
        </div>
      </SfDrawer>
    </>
  );
});
