# ProgressCircular

::tabs{:titles='["Usage", "API", "Source code"]'}

#tab-1

`SfProgressCircular` can be used provide feedback about the duration and progression of a process.

## Examples

### Sizes

`SfProgressCircular` supports various sizes that can be set with the `size` prop: `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`.

<Showcase showcase-name="ProgressCircular/ProgressCircularSizes" style="min-height:320px">

<<<../../../website/src/routes/showcases/ProgressCircular/ProgressCircularSizes/index.tsx

</Showcase>

### Customizing colors

By default, `SfProgressCircular` uses `primary-700` as the shape color (customizable by setting text color) and `neutral-300` for the background ring.

<!--
You can change these values in your [Tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override them for a single-element using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).
 -->

<!--
::tip
Learn more about [overriding default styles](/customization/overriding-default-styles) in Storefront UI.
::
 -->

<Showcase showcase-name="ProgressCircular/ProgressCircularColors">

<<<../../../website/src/routes/showcases/ProgressCircular/ProgressCircularColors/index.tsx

</Showcase>

### With floating label

You can add text to the center of the Progress Circle by providing content to the component via the `Slot`.

::warning
`SfProgressCircular` is built using an `svg`, so your content must be SVG-compatible.
::

<Showcase showcase-name="ProgressCircular/ProgressCircularFloatingLabel">

<<<../../../website/src/routes/showcases/ProgressCircular/ProgressCircularFloatingLabel/index.tsx

</Showcase>

<!--
## Accessibility notes

This component sets the `role="progressbar"` to [allow screen readers treat it as an indicator of progress status](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role).
 -->

## Playground

<Generate class="playground" />

#tab-2

## Props

| Prop name    | Type             | Default value        | Possible values                                              |
| ------------ | ---------------- | -------------------- | ------------------------------------------------------------ |
| `class?`     | `string`         |                      |                                                              |
| `value?`     | `number`         | `0`                  |                                                              |
| `size?`      | `SfProgressSize` | `'base'`             | `'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'`,`'2xl'`,`'3xl'`,`'4xl'` |
| `ariaLabel?` | `string`         | `'Progress element'` |

## Slots

| Slot name | Description     |
| --------- | --------------- |
| `default` | Slotted content |

#tab-3

## Source code

<<<../../../../packages/qwik-storefront-ui/src/components/SfProgressCircular/SfProgressCircular.tsx
