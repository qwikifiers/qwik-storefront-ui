import { $, QwikChangeEvent, component$, useSignal } from '@builder.io/qwik';
import {
  SfAccordionItem,
  SfButton,
  SfCheckbox,
  SfChip,
  SfCounter,
  SfIconCancel,
  SfIconChevronLeft,
  SfIconClose,
  SfListItem,
  SfRadio,
  SfSelect,
  SfThumbnail,
} from 'qwik-storefront-ui';

const sortOptions = [
  { id: 'sort1', label: 'Relevance', value: 'relevance' },
  { id: 'sort2', label: 'Price: Low to High', value: 'price low to high' },
  { id: 'sort3', label: 'Price: High to Low', value: 'price high to low' },
  { id: 'sort4', label: 'New Arrivals', value: 'new arrivals' },
  { id: 'sort5', label: 'Customer Rating', value: 'customer rating' },
  { id: 'sort6', label: 'Bestsellers', value: 'bestsellers' },
];

const filtersData = [
  {
    id: 'acc1',
    summary: 'Size',
    type: 'size',
    details: [
      { id: 's1', label: '6', value: '6', counter: 10 },
      { id: 's2', label: '6.5', value: '6.5', counter: 10 },
      { id: 's3', label: '7', value: '7.5', counter: 30 },
      { id: 's4', label: '8', value: '8', counter: 0 },
      { id: 's5', label: '8.5', value: '8.5', counter: 3 },
      { id: 's6', label: '9', value: '9', counter: 7 },
      { id: 's7', label: '9.5', value: '9.5', counter: 9 },
      { id: 's8', label: '10', value: '10', counter: 11 },
      { id: 's9', label: '10.5', value: '10.5', counter: 12 },
      { id: 's10', label: '11', value: '11', counter: 0 },
      { id: 's11', label: '11.5', value: '11.5', counter: 4 },
      { id: 's12', label: '12', value: '12', counter: 1 },
    ],
  },
  {
    id: 'acc2',
    summary: 'Colors',
    type: 'color',
    details: [
      {
        id: 'c1',
        label: 'Primary',
        value: 'bg-primary-500',
        counter: 10,
      },
      {
        id: 'c2',
        label: 'Black and gray',
        value: 'bg-[linear-gradient(-45deg,#000_50%,#d1d5db_50%)]',
        counter: 5,
      },
      {
        id: 'c3',
        label: 'Violet',
        value: 'bg-violet-500',
        counter: 0,
      },
      {
        id: 'c4',
        label: 'Red',
        value: 'bg-red-500',
        counter: 2,
      },
      {
        id: 'c5',
        label: 'Yellow',
        value: 'bg-yellow-500',
        counter: 100,
      },
      {
        id: 'c6',
        label: 'Avocado',
        value: 'bg-gradient-to-tr from-yellow-300 to-primary-500',
        counter: 14,
      },
    ],
  },
  {
    id: 'acc3',
    summary: 'Brand',
    type: 'checkbox',
    details: [
      { id: 'b1', label: 'Conroy', value: 'conroy', counter: 10 },
      { id: 'b2', label: 'Goyette', value: 'goyette', counter: 100 },
      { id: 'b3', label: 'Ledner & Ward', value: 'lednerward', counter: 0 },
      { id: 'b4', label: 'Pacocha', value: 'pacocha', counter: 3 },
    ],
  },
  {
    id: 'acc4',
    summary: 'Price',
    type: 'radio',
    details: [
      { id: 'pr1', label: 'Under $24.99', value: 'under', counter: 123 },
      { id: 'pr2', label: '$25.00 - $49.99', value: '25-49', counter: 100 },
      { id: 'pr3', label: '$50.00 - $99.99', value: '50-99', counter: 12 },
      { id: 'pr4', label: '$100.00 - $199.99', value: '100-199', counter: 3 },
      { id: 'pr5', label: '$200.00 and above', value: 'above', counter: 18 },
    ],
  },
];

export default component$(() => {
  const selectedFiltersSignal = useSignal<string[]>([]);
  const openedSignal = useSignal<string[]>(filtersData.map((item) => item.id));

  const isAccordionItemOpen = (id: string) => openedSignal.value.includes(id);

  const handleFilterSelection = $((val: string) => {
    selectedFiltersSignal.value.indexOf(val) > -1
      ? (selectedFiltersSignal.value = [
          ...selectedFiltersSignal.value.filter((value) => value !== val),
        ])
      : (selectedFiltersSignal.value = [...selectedFiltersSignal.value, val]);
  });

  const handleRadioSelection = $((val: string) => {
    const newSelectedFilters = selectedFiltersSignal.value.filter(
      (selectedFilter) => !selectedFiltersSignal.value.includes(selectedFilter)
    );
    newSelectedFilters.push(val);
    selectedFiltersSignal.value = newSelectedFilters;
  });

  const handleToggle = $((id: string) => (open: boolean) => {
    open
      ? (openedSignal.value = [...openedSignal.value, id])
      : (openedSignal.value = openedSignal.value.filter((item) => item !== id));
  });

  return (
    <aside>
      <div class="flex items-center justify-between">
        <h4 class="px-2 font-bold typography-headline-4">Filters</h4>
        {selectedFiltersSignal.value.length ? (
          <SfButton
            type="reset"
            size="sm"
            variant="tertiary"
            class="hidden md:flex"
            onClick$={() => {
              selectedFiltersSignal.value = [];
            }}
          >
            <div q:slot="suffix">
              <SfIconCancel size="sm" />
            </div>
            Clear all
          </SfButton>
        ) : null}
        <button type="button" class="md:hidden text-neutral-500">
          <SfIconClose />
        </button>
      </div>
      <hr class="my-4" />
      <p class="px-2 mb-2 font-medium typography-headline-5">Sort by:</p>
      <div class="px-2">
        <SfSelect aria-label="Sort by">
          {sortOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </SfSelect>
      </div>
      <hr class="my-4" />
      {filtersData.map((section) => (
        <>
          <SfAccordionItem
            key={section.id}
            onToggle$={() => {
              handleToggle(section.id);
            }}
            open={isAccordionItemOpen(section.id)}
          >
            <div class="flex justify-between p-2 mb-2">
              <p class="mb-2 font-medium typography-headline-5">
                {section.summary}
              </p>
              <SfIconChevronLeft
                class={`text-neutral-500 ${
                  isAccordionItemOpen(section.id) ? 'rotate-90' : '-rotate-90'
                }`}
              />
            </div>
            <div q:slot="detail">
              {section.type === 'size' && (
                <ul class="flex flex-wrap gap-4 px-1.5">
                  {section.details.map(({ id, label, value, counter }, key) => (
                    <li key={key}>
                      <SfChip
                        key={id}
                        size="sm"
                        inputProps={{
                          value,
                          disabled: !counter,
                          checked: selectedFiltersSignal.value.includes(value),
                          onChange$: $(
                            (event: QwikChangeEvent<HTMLInputElement>) => {
                              handleFilterSelection(event.target.value);
                            }
                          ),
                        }}
                      >
                        {label}
                      </SfChip>
                    </li>
                  ))}
                </ul>
              )}
              {section.type === 'color' &&
                section.details.map(({ id, label, value, counter }) => (
                  <SfListItem
                    key={id}
                    as="label"
                    size="sm"
                    class={`px-1.5 bg-transparent hover:bg-transparent ${
                      selectedFiltersSignal.value.includes(value)
                        ? 'font-medium'
                        : ''
                    }`}
                    selected={selectedFiltersSignal.value.includes(value)}
                  >
                    <div q:slot="prefix">
                      <>
                        <input
                          value={value}
                          checked={selectedFiltersSignal.value.includes(value)}
                          class="appearance-none peer"
                          type="checkbox"
                          onChange$={(event) => {
                            handleFilterSelection(event.target.value);
                          }}
                        />
                        <span class="inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline">
                          <SfThumbnail size="sm" class={value} />
                        </span>
                      </>
                    </div>
                    <p>
                      <span class="mr-2 text-sm">{label}</span>
                      <SfCounter size="sm">{counter}</SfCounter>
                    </p>
                  </SfListItem>
                ))}
              {section.type === 'checkbox' &&
                section.details.map(({ label, value, counter }) => (
                  <SfListItem
                    key={value}
                    as="label"
                    size="sm"
                    disabled={counter === 0}
                    class={`px-1.5 bg-transparent hover:bg-transparent ${
                      selectedFiltersSignal.value.includes(value)
                        ? 'font-medium'
                        : ''
                    }`}
                  >
                    <div q:slot="prefix">
                      <SfCheckbox
                        disabled={counter === 0}
                        value={value}
                        checked={selectedFiltersSignal.value.includes(value)}
                        onChange$={(event) => {
                          handleFilterSelection(event.target?.value);
                        }}
                      />
                    </div>
                    <p>
                      <span class="mr-2 text-sm">{label}</span>
                      <SfCounter size="sm">{counter}</SfCounter>
                    </p>
                  </SfListItem>
                ))}
              {section.type === 'radio' &&
                section.details.map(({ label, value, counter }) => (
                  <SfListItem
                    key={value}
                    as="label"
                    size="sm"
                    disabled={counter === 0}
                    class={`px-1.5 bg-transparent hover:bg-transparent ${
                      selectedFiltersSignal.value.includes(value)
                        ? 'font-medium'
                        : ''
                    }`}
                  >
                    <div q:slot="prefix">
                      <SfRadio
                        disabled={counter === 0}
                        value={value}
                        name="radio-price"
                        checked={selectedFiltersSignal.value.includes(value)}
                        onChange$={(event) => {
                          handleRadioSelection(event.target.value);
                        }}
                      />
                    </div>
                    <p>
                      <span class="mr-2 text-sm">{label}</span>
                      <SfCounter size="sm">{counter}</SfCounter>
                    </p>
                  </SfListItem>
                ))}
            </div>
          </SfAccordionItem>
          <hr class="my-4" />
        </>
      ))}
      <div class="flex justify-between">
        <SfButton
          variant="secondary"
          class="w-full mr-3 md:hidden"
          onClick$={() => {
            selectedFiltersSignal.value = [];
          }}
        >
          Clear all filters
        </SfButton>
        <SfButton class="w-full">Show products</SfButton>
      </div>
    </aside>
  );
});
