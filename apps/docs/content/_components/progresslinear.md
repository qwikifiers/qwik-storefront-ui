# ProgressLinear

::tabs{:titles='["Usage", "API", "Source code"]'}

#tab-1

`SfProgressLinear` provides feedback about the duration and progression of a process.

## Examples

### Sizes

`SfProgressLinear` does not set it's own width by default, however you can control its height with the `size` prop. Possible values are `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`.

<Showcase showcase-name="ProgressLinear/ProgressLinearSizes" style="min-height:300px">

<<<../../../website/src/routes/showcases/ProgressLinear/ProgressLinearSizes/index.tsx

</Showcase>

### Customizing colors

By default, `SfProgressLinear` uses `primary-700` as the color of the bar (customizable by setting text color) and `neutral-300` as its background.

<!--
You can change these values in your [Tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override them for a single element using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).
 -->

<!--
::tip
Learn more about [overriding default styles](/customization/overriding-default-styles) in Storefront UI.
::
 -->

<Showcase showcase-name="ProgressLinear/ProgressLinearColors">

<<<../../../website/src/routes/showcases/ProgressLinear/ProgressLinearColors/index.tsx

</Showcase>

### With label

`SfProgressLinear` should be displayed with an accessible text label. You achieve this for example: by using `ariaLabel` prop or by nesting the component inside a `<label>` with text content.

<Showcase showcase-name="ProgressLinear/ProgressLinearLabel">

<<<../../../website/src/routes/showcases/ProgressLinear/ProgressLinearLabel/index.tsx

</Showcase>

<!--
## Accessibility notes

ProgressLinear uses native [`<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) HTMLElement] to [allow screen readers treat it as an indicator of [progress status](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role).
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

<<<../../../../packages/qwik-storefront-ui/src/components/SfProgressLinear/SfProgressLinear.tsx
