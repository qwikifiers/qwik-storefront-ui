<script setup lang="ts">
import { blocks } from '~/utils/blocks';
type Framework = {
  name: 'vue' | 'react' | 'qwik';
  icon: string;
};

const framework = useCookie<Framework>('framework');
</script>
<template>
  <div class="grid grid-cols-12 custom-block gap-8 not-prose mt-8">
    <NuxtLink
      v-for="block in blocks.qwik"
      :key="block"
      :to="`/qwik/blocks/${block.toLowerCase()}`"
      class="col-span-12 md:col-span-4 lg:col-span-3 bg-white border dark:bg-zinc-800 rounded-lg hover:border-primary-500"
    >
      <img :src="`/thumbnails/blocks/${block.replace('Sf', '')}.png`" />
      <div class="p-4 font-bold">
        {{ block.replace('Sf', '') }}
      </div>
    </NuxtLink>
  </div>
</template>
