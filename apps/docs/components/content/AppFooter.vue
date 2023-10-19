<script setup lang="ts">
const socialsLinks = [
  {
    icon: 'ri:github-fill',
    url: 'https://github.com/qwikifiers/qwik-storefront-ui',
    alt: 'Github',
  },
];
</script>
<template>
  <footer
    class="mt-48 text-sm px-6 lg:px-12 2xl:max-w-7xl w-full flex items-center border-t py-4"
  >
    <div class="flex-1 text-md mt-0.5">
      <NuxtLink
        target="_blank"
        v-for="{ icon, url, alt } in socialsLinks"
        :key="url"
        :to="url"
      >
        <div class="flex">
          <span class="t-[5px] mr-2 hidden sm:block">qwik-storefront-ui</span>
          <Icon :name="icon" class="h-5 w-5" />
        </div>
      </NuxtLink>
    </div>
    <nav class="flex items-center mx-auto font-medium gap-x-8" />
    <div class="flex items-center gap-x-4 ml-auto flex-1 justify-end">
      <p>© 2023 Vue Storefront.</p>
    </div>
  </footer>
</template>
