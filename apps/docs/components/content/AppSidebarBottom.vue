<script setup lang="ts">
import { NavItem } from '@nuxt/content/dist/runtime/types';
import { blocks } from '~/utils/blocks';
import { components } from '~/utils/components';

type Framework = {
  name: 'vue' | 'react' | 'qwik';
  icon: string;
};
const framework = useCookie<Framework>('framework');

const links = computed<NavItem[]>(() => {
  return [
    {
      title: 'Components',
      _path: '/components',

      children: [
        {
          title: 'All Components',
          _path: '/components',
          _id: 'all-components',
          sidebarNesting: 'inline',
        },
        ...(components.qwik?.map((component: string) => ({
          title: component.replace('Sf', ''),
          _path: `/qwik/components/${component
            .replace('Sf', '')
            .toLowerCase()}`,
          _id: component,
          sidebarNesting: 'inline',
        })) ?? []),
      ],
    },
    {
      title: 'Blocks',
      _path: '/blocks',

      children: [
        {
          title: 'All Blocks',
          _path: '/blocks',
          _id: 'all-blocks',
          sidebarNesting: 'inline',
        },
        ...(blocks.qwik?.map((block: string) => ({
          title: block.replace('Sf', ''),
          _path: `/qwik/blocks/${block.toLowerCase()}`,
          _id: block,
          sidebarNesting: 'inline',
        })) ?? []),
      ],
    },
    {
      title: 'Hooks',
      _path: '/hooks',
      children: [
        {
          title: `All ${'Hooks'}`,
          _path: '/hooks',
          _id: 'all-hooks',
          sidebarNesting: 'inline',
        },
        ...(hooks.qwik.map((hook: string) => ({
          title: hook,
          _path: `/qwik/hooks/${hook.toLowerCase()}`,
          _id: hook,
          sidebarNesting: 'inline',
        })) ?? []),
      ],
    },
  ];
});
</script>

<template>
  <AppSidebarTree :navItems="links" :level="1" :root="'/'" />
</template>
