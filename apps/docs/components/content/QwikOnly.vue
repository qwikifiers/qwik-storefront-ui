<script setup lang="ts">
const selectedFramework = useCookie('framework', {
  default: () => ({
    name: 'Vue',
    icon: 'logos:vue',
  }),
});
</script>
<template>
  <div>
    <ContentSlot
      v-if="selectedFramework.name.toLowerCase() === 'qwik'"
      :use="$slots.default"
    />
  </div>
</template>
