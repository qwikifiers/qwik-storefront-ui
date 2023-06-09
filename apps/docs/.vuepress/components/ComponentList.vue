<template>
  <div class="mt-16 custom-block">
    <div class="relative grid grid-cols-12 gap-8">
      <RouterLink
        v-for="componentName in components"
        :key="componentName"
        class="col-span-12 overflow-hidden transition-all border rounded-lg hover:-translate-y-1 hover:shadow-md md:col-span-6 lg:col-span-4 hover:border-black dark:hover:border-white dark:border-zinc-700"
        :to="generateComponentPath(framework, componentName, type)"
      >
        <div v-if="!hideThumbnail" class="flex items-center justify-center w-full bg-gray-100">
          <img
            :src="$withBase(`/thumbnails/${type}/${componentName.replace('Sf', '')}.png`)"
            class="object-cover w-full h-full"
            :alt="componentName"
          />
        </div>
        <div class="p-4">
          <h4 class="font-bold">{{ componentName.replace('Sf', '') }}</h4>
          <p v-if="type === 'blocks'" class="mt-2 text-sm">{{ blockCount(componentName) }} blocks</p>
          <p v-if="!hideDescription" class="mt-2 text-sm">{{ componentDescription(componentName) }}</p>
        </div>
      </RouterLink>
      <template v-if="type === 'blocks'">
        <div
          v-for="componentName in futureBlocks"
          :key="componentName"
          class="col-span-12 overflow-hidden transition-all border rounded-lg opacity-60 md:col-span-6 lg:col-span-4 dark:border-zinc-700"
        >
          <div v-if="!hideThumbnail" class="flex items-center justify-center w-full bg-gray-100">
            <img
              :src="$withBase(`/thumbnails/${type}/${componentName.replace('Sf', '')}.png`)"
              class="object-cover w-full h-full"
              :alt="componentName"
            />
          </div>
          <div class="p-4">
            <h4 class="font-bold">{{ componentName.replace('Sf', '') }}</h4>
            <p class="mt-2 text-sm">Coming Soon</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import components from '../../utils/components.json';
import blocks from '../../utils/blocks.json';
import futureBlocks from '../../utils/future-blocks.json';
import hooks from '../../utils/hooks.json';
import { generateComponentPath } from '../utils/path.util';

export default {
  props: {
    framework: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'components',
    },
    hideThumbnail: {
      type: Boolean,
      default: false,
    },
    hideDescription: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    components() {
      const files = this.type === 'blocks' ? blocks : this.type === 'hooks' ? hooks : components;
      const list = this.framework === 'react' ? files.react : files.vue;
      return list;
    },
  },
  methods: {
    componentDescription(componentName) {
      const componentPath = `/${this.framework}/${this.type}/${componentName.replace('Sf', '').toLowerCase()}.html`;

      return this.$site.pages.find((page) => page.path.toLowerCase() === componentPath)?.frontmatter?.description;
    },
    blockCount(componentName) {
      const componentPath = `/${this.framework}/${this.type}/${componentName.replace('Sf', '').toLowerCase()}.html`;

      return this.$site.pages.find((page) => page.path.toLowerCase() === componentPath)?.frontmatter?.blockCount;
    },
  },
  data() {
    return { generateComponentPath, futureBlocks };
  },
};
</script>
