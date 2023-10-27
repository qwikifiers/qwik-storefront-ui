# Select

::tabs{:titles='["Usage", "API", "Source code"]'}

#tab-1

`SfSelect` is a wrapper around the native `<select>` element. It provides additional styles for different states of `<select>` element.

<!--
::warning
If you need to make this field required, it is crucial to communicate this intention clearly to your end users. You can find more information about [required form fields in our guide here](../blocks/FormFields.html).
::
 -->

## Examples

### Select sizes

`SfSelect` supports 3 sizes that can be set with the `size` prop: `'sm'`, `'base'`, `'lg'`.

<Showcase showcase-name="Select/SelectSizes" style="min-height:350px" >

<<<../../../website/src/routes/showcases/Select/SelectSizes/index.tsx

</Showcase>

### Custom chevron

You can replace the default chevron with your own custom content by using the `chevron` slot.

<Showcase showcase-name="Select/SelectCustomChevron">

<<<../../../website/src/routes/showcases/Select/SelectCustomChevron/index.tsx

</Showcase>

### Invalid state

`SfSelect` accepts an `invalid` prop that will add additional styling.

<Showcase showcase-name="Select/SelectInvalid">

<<<../../../website/src/routes/showcases/Select/SelectInvalid/index.tsx

</Showcase>

## Notes

All non-prop attributes and styles added to `SfSelect` component are passed directly to native input element. This means that you can add all of the input attributes directly to `SfSelect`. If you want to style the wrapper `div`, you can pass your classes via the `wrapperClassName` prop.

If you only have a few options, consider using the [`Radio`](radio.html) component instead of `Select`.

<!--
## Accessibility notes

Since this component uses the native `<select>` element, it inherits its accessibility features. For example, keyboard users can focus the select with `tab`, open with `space`, navigate the options using `arrows`, close the options menu with `Escape`, and select an option with `Enter` or `Space`.
 -->

## Playground

<Generate class="playground" />

#tab-2

## Props

| Prop name       | Type                                                                | Default value | Possible values         |
| --------------- | ------------------------------------------------------------------- | ------------- | ----------------------- |
| `class?`        | `string`                                                            |               |                         |
| `size?`         | `SfSelectSize`                                                      | `'base'`      | `'sm'`, `'base'`,`'lg'` |
| `invalid?`      | `boolean`                                                           | `false`       |                         |
| `wrapperClass?` | `string`                                                            |               |                         |
| `slotChevron?`  | `boolean`                                                           |               |                         |
| `onChange$?`    | `PropFunction<(event: QwikChangeEvent<HTMLSelectElement>) => void>` |               |                         |

## Slots

| Slot name | Description              |
| --------- | ------------------------ |
| `default` | Place for select options |
| `chevron` | Custom chevron           |
