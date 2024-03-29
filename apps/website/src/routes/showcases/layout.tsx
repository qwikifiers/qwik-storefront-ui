import { component$, Slot, useSignal } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import {
  SfButton,
  SfButtonSize,
  SfButtonVariant,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfIconExpandMore,
  SfListItem,
} from 'qwik-storefront-ui';

const files = import.meta.glob('./**');
const paths = Object.keys(files).filter((f) => f.indexOf('./index.tsx') !== 0);
const groups = paths.reduce(
  (prev: Record<string, { showcases: string[] }>, curr) => {
    const showcasePathArray = curr.slice(2).split('/');
    const showcaseName = showcasePathArray[showcasePathArray.length - 2];
    const groupName: string = showcasePathArray[0];
    if (groupName in prev) {
      prev[groupName].showcases.push(showcaseName);
    } else {
      if (showcaseName) {
        prev[groupName] = { showcases: [showcaseName] };
      }
    }
    return prev;
  },
  {}
);

export default component$(() => {
  const isOpenSignal = useSignal(true);
  const groupsOpenSignal = useSignal<string>('');

  const location = useLocation();

  const groupItemHref = (groupName: string, showcaseName: string) =>
    `/showcases/${groupName}/${showcaseName}`;

  return (
    <div class="e-page-examples">
      {location.url.searchParams.get('show') === 'true' && (
        <div class={`sidebar ${isOpenSignal.value ? '' : 'sidebar-collapsed'}`}>
          <header class="sidebar-heading">
            <h2>StorefrontUI v2</h2>
            <h3>Qwik Blocks</h3>
          </header>
          <SfButton
            class="sidebar-toggle"
            variant={SfButtonVariant.tertiary}
            size={SfButtonSize.sm}
            onClick$={() => {
              isOpenSignal.value = !isOpenSignal.value;
            }}
            aria-label={isOpenSignal.value ? 'Hide sidebar' : 'Open sidebar'}
          >
            <div q:slot="prefix">
              {isOpenSignal.value ? (
                <SfIconChevronLeft />
              ) : (
                <SfIconChevronRight />
              )}
            </div>
          </SfButton>
          <ul class="sidebar-list">
            {Object.keys(groups).map((group) => (
              <div key={group}>
                <li
                  class="flex justify-between px-2 py-1 bg-gray-200 cursor-pointer select-none"
                  onClick$={() => {
                    groupsOpenSignal.value =
                      groupsOpenSignal.value === group ? '' : group;
                  }}
                >
                  {group}
                  <SfIconExpandMore
                    class={`${
                      groupsOpenSignal.value === group ? 'rotate-180' : ''
                    }`}
                  />
                </li>
                {groupsOpenSignal.value === group ? (
                  <li>
                    <ul>
                      {groups[group].showcases.map((showcaseName) => (
                        <li
                          key={showcaseName}
                          data-sidebar-component={showcaseName}
                        >
                          <Link
                            href={
                              groupItemHref(group, showcaseName) + '?show=true'
                            }
                          >
                            <SfListItem
                              selected={
                                location.url.pathname ===
                                groupItemHref(group, showcaseName)
                              }
                              class={
                                location.url.pathname ===
                                groupItemHref(group, showcaseName)
                                  ? 'font-medium'
                                  : ''
                              }
                              as="span"
                            >
                              {showcaseName}
                            </SfListItem>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : undefined}
              </div>
            ))}
          </ul>
        </div>
      )}
      <div class="e-page">
        <div class="e-page-component">
          <Slot />
        </div>
      </div>
    </div>
  );
});
