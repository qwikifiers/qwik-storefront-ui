# Tooltip

::tabs{:titles='["Usage", "API", "Source Code"]' class="mt-8"}

#tab-1

`SfTooltip` can be used to provide additional information when an element receives focus or is hovered.

It's built on top of `useTooltip` and accepts all its params.

::react-only
Learn more about `useTooltip` hook in the [Hooks > useTooltip docs](/react/hooks/useTooltip.html).
::
::vue-only
Learn more about `useTooltip` composable in the [Composables > useTooltip docs](/vue/hooks/useTooltip.html).
::
::qwik-only
Learn more about `useTooltip` hook in the [Hooks > useTooltip docs](/qwik/hooks/useTooltip.html).
::

## Examples

### Basic Usage

<Showcase showcase-name="Tooltip/BasicTooltip">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Tooltip/BasicTooltip.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Tooltip/BasicTooltip.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Tooltip/BasicTooltip/index.tsx
::
</Showcase>

## Accessibility notes

By default, this component sets `role="tooltip"`.

## Playground

<Generate class="playground" />

#tab-2

## Props

::vue-only
| Prop name | Type | Default value | Possible values |
| --------- | -------------------------------------------------------- | ------------- | --------------- |
| `label`\* | `string` | | |
| `showArrow` | `boolean` | `false` | |
| `placement` | `SfPopoverPlacement` | | |
| `arrowSize` | `${number}px` &#124; `${number}em` &#124; `${number}rem` | | |
::
::react-only
| Prop name | Type | Default value | Possible values |
| --------- | -------------------------------------------------------- | ------------- | --------------- |
| `label`\* | `string` | | |
| `showArrow` | `boolean` | `false` | |
| `placement` | `SfPopoverPlacement` | | |
| `arrowSize` | `${number}px` &#124; `${number}em` &#124; `${number}rem` | | |
| `children` | `ReactNode` | | |
::
::qwik-only
| Prop name | Type | Default value | Possible values |
| --------- | -------------------------------------------------------- | ------------- | --------------- |
| `label`\* | `string` | | |
| `showArrow` | `boolean` | `false` | |
| `placement` | `SfPopoverPlacement` | | |
| `arrowSize` | `${number}px` &#124; `${number}em` &#124; `${number}rem` | | |
| `children` | `ReactNode` | | |
::

::vue-only

## Slots

| Slot name | Description                            |
| --------- | -------------------------------------- |
| `default` | Content being described by the tooltip |

::
#tab-3

::vue-only
<<<../../../../packages/sfui/frameworks/vue/components/SfTooltip/SfTooltip.vue
::
::react-only
<<<../../../../packages/sfui/frameworks/react/components/SfTooltip/SfTooltip.tsx
::

::
