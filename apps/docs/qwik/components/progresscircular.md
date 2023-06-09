---
repoPath: /components/progresscircular.md
layout: AtomLayout
hideBreadcrumbs: true
---
# ProgressCircular

:::::: slot usage

`SfProgressCircular` can be used provide feedback about the duration and progression of a process. 

## Examples

### Sizes

`SfProgressCircular` supports various sizes that can be set with the `size` prop: `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`.

<Showcase showcase-name="ProgressCircular/ProgressCircularSizes" style="min-height:320px">

<<<../../preview/nuxt/pages/showcases/ProgressCircular/ProgressCircularSizes.vue

</Showcase>

### Customizing colors

By default, `SfProgressCircular` uses `primary-700` as the shape color (customizable by setting text color) and `neutral-300` for the background ring. You can change these values in your [Tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override them for a single-element using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).

::: read-more
Learn more about [overriding default styles](/vue/customization/overriding-default-styles) in Storefront UI.
:::

<Showcase showcase-name="ProgressCircular/ProgressCircularColors">

<<<../../preview/nuxt/pages/showcases/ProgressCircular/ProgressCircularColors.vue

</Showcase>

### With floating label

You can add text to the center of the Progress Circle by providing content to the component via the `default` slot.

::: warning
`SfProgressCircular` is built using an `svg`, so your content must be SVG-compatible.
:::

<Showcase showcase-name="ProgressCircular/ProgressCircularFloatingLabel">

<<<../../preview/nuxt/pages/showcases/ProgressCircular/ProgressCircularFloatingLabel.vue

</Showcase>

## Accessibility notes

This component sets the `role="progressbar"` to [allow screen readers treat it as an indicator of progress status](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role).


## Playground

<Generate />
::::::

::: slot api

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|  `value`                |  `number`                    | `0`             |                                        |
|  `size`              |  `SfProgressSize` |   `'base'`        |   `'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'`,`'2xl'`,`'3xl'`,`'4xl'`  |
|  `ariaLabel`         |  `string`                    |   `'Progress element'`  |                                        |

## Slots

| Slot name | Description                     |
| --------- | ------------------------------- |
| `default`   | adds content within svg element |
:::
::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/vue/components/SfProgressCircular/SfProgressCircular.vue
</SourceCode>
:::
