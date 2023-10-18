<script setup lang="ts">
import { SfDropdown, useDisclosure } from '@storefront-ui/vue';

const { isOpen, toggle } = useDisclosure();

type Framework = {
  name: string;
  icon: string;
  link?: string;
};

const frameworks: Framework[] = [
  {
    name: 'qwik',
    icon: 'logos:qwik',
  },
  {
    name: 'vue',
    icon: 'logos:vue',
  },
  {
    name: 'react',
    icon: 'logos:react',
  },
];

const selectedFramework = useCookie('framework', {
  default: () => frameworks[0],
});

const route = useRoute();

watch(
  () => route,
  () => {
    selectedFramework.value = {
      name: 'qwik',
      icon: 'logos:qwik',
    };
  },
  {
    immediate: true,
  }
);

function selectFramework(framework: Framework) {
  isOpen.value = false;
  if (framework.name !== 'qwik') {
    location.href = `https://docs.storefrontui.io/v2/${framework.name}/getting-started.html`;
  }
}
</script>
<template>
  <div class="relative mb-4">
    <SfDropdown
      v-model="isOpen"
      class="[&>div]:w-[calc(100%-3rem)] [&>div]:!left-0 [&>div]:border [&>div]:rounded w-full"
    >
      <template #trigger>
        <button
          @click="toggle()"
          class="bg-gray-100 w-full dark:bg-neutral-800 border rounded flex p-2 px-4 items-center capitalize"
        >
          <svg
            viewBox="0 0 500 506"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 mr-2"
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
          {{ selectedFramework.name }}
          <Icon name="ion:md-arrow-dropdown" class="w-4 h-4 ml-auto pl-4" />
        </button>
      </template>
      <ul class="rounded bg-gray-100 w-full dark:bg-neutral-800">
        <li
          v-for="(framework, index) in frameworks"
          :key="framework.name"
          class=""
          :class="{
            'border-t': index > 0,
          }"
        >
          <button
            @click="selectFramework(framework)"
            class="w-full py-2 px-4 dark:hover:bg-neutral-700 hover:bg-gray-50 flex items-center capitalize"
          >
            <Icon
              v-if="framework.name !== 'qwik'"
              :name="framework.icon"
              class="w-4 h-4 mr-2"
            />
            <svg
              viewBox="0 0 500 506"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mr-2"
              v-if="framework.name === 'qwik'"
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
            {{ framework.name }}
            <Icon
              v-if="framework.name === selectedFramework.name"
              name="ion:md-checkmark"
              class="w-4 h-4 ml-auto text-primary-500"
            />
          </button>
        </li>
      </ul>
    </SfDropdown>
  </div>
</template>
<style>
div[data-testid='dropdown-content'] {
  z-index: 1;
}
</style>
