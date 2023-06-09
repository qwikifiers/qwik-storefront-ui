import { $, component$, useSignal } from '@builder.io/qwik';
import { SfAccordionItem, SfIconChevronLeft } from 'qwik-storefront-ui';

const accordionItems = [
  {
    id: 'acc-1',
    summary: 'Where is my order?',
    details:
      'We will inform you about the expected delivery time of your order in checkout and in your order confirmation email.',
  },
  {
    id: 'acc-2',
    summary: 'What if an item is out of stock?',
    details:
      "If an item you're interested in is sold out, you can register to be notified when your size is back in stock.",
  },
  {
    id: 'acc-3',
    summary: 'How do I cancel my order?',
    details:
      "If you made a mistake or simply changed your mind after placing an order, there's no need to fuss. As long as your parcel has yet to be picked and packed in our warehouse, you'll have the option to cancel.",
  },
];

export default component$(() => {
  const activeSignal = useSignal<string | null>(null);
  const isOpen = (id: string) => id === activeSignal.value;
  const handleToggle = $((id: string, open: boolean) => {
    activeSignal.value = open ? id : null;
  });

  return (
    <div class="border border-neutral-200 rounded-md divide-y text-neutral-900">
      {accordionItems.map(({ id, summary, details }) => (
        <SfAccordionItem
          key={id}
          onToggle$={(open: boolean) => handleToggle(id, open)}
          open={isOpen(id)}
        >
          <div class="flex justify-between p-4 font-medium hover:bg-neutral-100 active:neutral-100">
            <p>{summary}</p>
            <SfIconChevronLeft
              class={`text-neutral-500 ${
                isOpen(id) ? 'rotate-90' : !isOpen(id) ? '-rotate-90' : ''
              }`}
            />
          </div>
          <div q:slot="detail">
            <p class="p-4">{details}</p>
          </div>
        </SfAccordionItem>
      ))}
    </div>
  );
});
