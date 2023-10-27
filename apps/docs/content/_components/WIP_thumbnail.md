# Thumbnail

::tabs{:titles='["Usage", "API", "Source Code"]' class="mt-8"}

#tab-1

`SfThumbnail` is a component that allows the user to display a color, gradient, icon, or image in a thumbnail style. One common use case from our [blocks](../blocks/Filters.html) is using this component as avatar or thumbnail for filters.

## Examples

### Sizes

Thumbnail supports various sizes that can be set with the `size` prop: `'sm'`, `'base'`, `lg ` and `'xl'`

<Showcase showcase-name="Thumbnail/Sizes">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Thumbnail/Sizes.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Thumbnail/Sizes.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Thumbnail/Sizes/index.tsx
::
</Showcase>

### Single color

The most simple use case of thumbnail can be achieved by seting a single color with any of Tailwind's background `bg-` property.

<Showcase showcase-name="Thumbnail/Color">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Thumbnail/Color.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Thumbnail/Color.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Thumbnail/Color/index.tsx
::
</Showcase>

### Gradient

Gradients can be applied with any of Tailwind's `bg-gradient-` classes.

<Showcase showcase-name="Thumbnail/Gradient">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Thumbnail/Gradient.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Thumbnail/Gradient.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Thumbnail/Gradient/index.tsx
::
</Showcase>

### Image

You can pass an image ::vue-onlyinto the default slot:: ::react-onlyas children:: ::qwik-onlyinto the default slot:: to achieve avatar-like look of thumbnail.

<Showcase showcase-name="Thumbnail/Image">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Thumbnail/Image.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Thumbnail/Image.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Thumbnail/Image/index.tsx
::
</Showcase>

### Icon

::vue-only
Similar to images, you can also pass an icon into the default slot.
::

::react-only
Similar to images, you can also pass an icon as children.

::
::qwik-only
Similar to images, you can also pass an icon into the default slot.
::
<Showcase showcase-name="Thumbnail/Icon">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Thumbnail/Icon.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Thumbnail/Icon.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Thumbnail/Icon/index.tsx
::
</Showcase>

## Playground

<Generate class="playground" style="height: 500px;" />

#tab-2

## Props

::vue-only
| Prop name | Type | Default value | Possible values |
|------------------ |----------------------------|---------------|----------------------------------------|
| `size` | `SfChip` | `'base'` | `'sm'`, `'base'`, `'lg'` |
::

::react-only
| Prop name | Type | Default value | Possible values |
|------------------ |----------------------------|---------------|----------------------------------------|
| `size` | `SfChip` | `'base'` | `'sm'`, `'base'`, `'lg'` |
| `className` | `string` | | |
| `children` | `ReactNode` | | |
::

::qwik-only
| Prop name | Type | Default value | Possible values |
|------------------ |----------------------------|---------------|----------------------------------------|
| `size` | `SfChip` | `'base'` | `'sm'`, `'base'`, `'lg'` |
| `className` | `string` | | |
| `children` | `ReactNode` | | |
::

::vue-only

## Slots

| Slot name | Description                  |
| --------- | ---------------------------- |
| `default` | allows to pass icon or image |

::

#tab-3

::vue-only
<<<../../../../packages/sfui/frameworks/vue/components/SfThumbnail/SfThumbnail.vue
::
::react-only
<<<../../../../packages/sfui/frameworks/react/components/SfThumbnail/SfThumbnail.tsx
::

::
