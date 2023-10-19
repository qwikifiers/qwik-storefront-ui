<script setup lang="ts">
const isMobileMenuOpen = ref(false);
const { page } = useContent();

const { storefrontUi } = useRuntimeConfig().public;
</script>
<template>
  <div>
    <div
      v-if="storefrontUi"
      class="w-full bg-secondary-500 px-6 py-2 flex justify-between items-center"
    >
      <Icon
        name="IconVsfFull"
        width="10rem"
        height="2.5rem"
        class="[&>*]:!fill-white"
      />
      <NuxtLink
        to="https://qwik.builder.io/"
        class="font-xl flex items-center text-sm group text-white"
      >
        <svg
          viewBox="0 0 500 506"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 my-2 mr-2"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M250 449.707L431.102 505.511L343.037 423.652L129.174 224.859L179.178 174.86L156.157 16.117L8.34822 193.702C-2.78296 212.982 -2.78273 236.736 8.34883 256.016L102.191 418.551C113.323 437.831 133.894 449.707 156.156 449.707L250 449.707Z"
            fill="#18B6F6"
          />
          <path
            d="M343.843 0L156.157 1.74069e-05C133.894 1.94717e-05 113.323 11.8771 102.192 31.1573L8.34822 193.702L156.157 16.117L370.826 224.859L330.828 264.86L343.037 423.652L431.102 505.511C436.18 507.075 440.635 501.755 438.204 497.031L397.809 418.551L491.651 256.016C502.783 236.736 502.783 212.982 491.652 193.702L397.808 31.1572C386.677 11.8771 366.106 -2.06475e-06 343.843 0Z"
            fill="#AC7EF4"
          />
          <path
            d="M370.826 224.859L156.157 16.117L179.178 174.86L129.174 224.859L343.037 423.652L330.828 264.86L370.826 224.859Z"
            fill="white"
          />
        </svg>
        <span class="text-xl font-bold">Qwik</span>
      </NuxtLink>
    </div>

    <div
      class="mx-auto min-h-screen text-neutral-900 dark:text-[var(--tw-prose-body)] antialiased relative flex mr-0"
    >
      <AppSidebar
        class="max-lg:fixed lg:relative grow-0 max-lg:top-0 max-lg:left-0 max-lg:z-[100] max-lg:h-full bg-white dark:bg-neutral-950 min-h-screen"
        :class="{
          'max-lg:hidden': !isMobileMenuOpen,
        }"
        :mobile-menu-open="isMobileMenuOpen"
        @close="isMobileMenuOpen = false"
      />

      <div
        class="flex flex-col items-center flex-1 border-b-2 min-w-0 max-w-full"
      >
        <AppHeader class="sticky top-0 bg-white dark:bg-neutral-950 z-50" />

        <div
          class="flex items-center lg:hidden text-left border-b w-full px-6 py-2 text-sm gap-x-2 sticky top-[0px] bg-white dark:bg-neutral-950 z-40"
        >
          <button @click="isMobileMenuOpen = true">
            <Icon name="ri:menu-2-fill" class="text-lg" />
          </button>
          <span>
            {{ page?.title }}
          </span>
        </div>
        <div
          class="flex justify-center px-6 lg:px-12 py-4 2xl:max-w-7xl w-full mx-auto shrink-0 min-h-screen min-w-0"
        >
          <slot />
        </div>
        <ClientOnly>
          <AppEdit />
        </ClientOnly>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<style>
.dark {
  @apply bg-neutral-950;
}

.document-driven-page {
  @apply w-full;
}
</style>
