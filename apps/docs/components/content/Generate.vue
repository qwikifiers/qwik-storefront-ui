<template>
  <div class="custom-block">
    <iframe
      ref="iframeRef"
      :src="exampleUrl"
      class="generate w-full h-full"
    ></iframe>
  </div>
</template>

<script setup>
import { components } from '../../utils/components';

const props = defineProps({
  showcasePath: {
    type: String,
    default: undefined,
  },
  noScale: {
    type: Boolean,
    default: false,
  },
  noPaddings: {
    type: Boolean,
    default: false,
  },
  allow: {
    type: String,
    default: undefined,
  },
});

const iframeRef = ref(undefined);

const config = useRuntimeConfig();

onMounted(() => {
  const iframeElement = iframeRef.value;
  window.addEventListener(
    'message',
    (e) => {
      if (e.data === 'loaded') {
        if (props.noPaddings)
          iframeElement?.contentWindow?.postMessage('no-paddings', '*');
        else if (props.noScale)
          iframeElement?.contentWindow?.postMessage('no-scale', '*');
      }
    },
    false
  );
});

const route = useRoute();

const framework = useCookie('framework', {
  default: () => ({
    name: 'qwik',
    icon: 'logos:qwik',
  }),
});

const urlBasePath = computed(() => {
  return config.public.DOCS_EXAMPLES_QWIK_PATH;
});

const componentName = computed(() => {
  return route.path.split('/').pop()?.split('.')[0];
});

const exampleUrl = computed(() => {
  const componentNameFull = components[framework.value.name.toLowerCase()].find(
    (component) => component.toLowerCase().includes('sf' + componentName.value)
  );
  return `${urlBasePath.value}/${
    props.showcasePath
      ? `showcases/${props.showcasePath}`
      : `examples/${componentNameFull}`
  }`;
});
</script>

<style scoped>
.generate {
  height: 500px;
}
</style>
