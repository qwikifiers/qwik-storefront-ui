<script setup lang="ts">
import { hooks } from '~/utils/hooks';
type Framework = {
  name: 'vue' | 'react' | 'qwik';
  icon: string;
};

const framework = useCookie<Framework>('framework');
</script>
<template>
  <div class="grid grid-cols-12 custom-block gap-8 not-prose mt-8">
    <NuxtLink
      v-for="hook in hooks.qwik"
      :key="hook"
      :to="`/qwik/hooks/${hook.toLowerCase()}`"
      class="col-span-12 md:col-span-4 lg:col-span-3 bg-white border dark:bg-zinc-800 rounded-lg hover:border-primary-500"
    >
      <div class="p-4 font-bold">
        {{ hook }}
      </div>
    </NuxtLink>
  </div>
</template>
