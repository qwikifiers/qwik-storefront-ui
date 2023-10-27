# Input

::tabs{:titles='["Usage", "API", "Source code"]'}

#tab-1

`SfInput` is a single-line text field allows users to enter any combination of letters, numbers, or symbols. It adds default styles to the native `<input type="text">` and supports supports adding content before/after the text input.

<!--
:: info
If you need to make this field required, it is crucial to communicate this intention clearly to your end users. You can find more information about [required form fields in our guide here](../blocks/FormFields).
::
-->

## Examples

### Basic input component

`SfInput` supports 3 sizes that can be set with the `size` prop: `'sm'`, `base`, and `'lg'`.

<Showcase showcase-name="Input/InputWithoutLabel" style="min-height:400px;">

<<<../../../website/src/routes/showcases/Input/InputWithoutLabel/index.tsx

</Showcase>

### Input with icons

You can insert content before and after your input using the `prefix` and `suffix` slots.
This can be useful for adding icons or buttons to your input.

<Showcase showcase-name="Input/InputIcons">

<<<../../../website/src/routes/showcases/Input/InputIcons/index.tsx

</Showcase>

### Input in disabled state

`SfInput` comes with out-of-the-box styles for a disabled input.

<Showcase showcase-name="Input/InputDisabled">

<<<../../../website/src/routes/showcases/Input/InputDisabled/index.tsx

</Showcase>

### Readonly Input

`SfInput` comes with out-of-the-box styles for a readonly input.

<Showcase showcase-name="Input/InputReadonly">

<<<../../../website/src/routes/showcases/Input/InputReadonly/index.tsx

</Showcase>

### Invalid State

If you pass the `invalid` prop, the input will be styled to indicate an invalid state.

<Showcase showcase-name="Input/InputInvalid">

<<<../../../website/src/routes/showcases/Input/InputInvalid/index.tsx

</Showcase>

### Full Example

This is an example of what `SfInput` might look like in your end code. It has a label, help text, character counting, and different styles depending on the input state.

<Showcase showcase-name="Input/InputCharacters">

<<<../../../website/src/routes/showcases/Input/InputCharacters/index.tsx

</Showcase>

## Notes

All non-prop attributes and styles added to `SfInput` component are passed directly to the native input element. This means that you can add all of the input attributes directly to `SfInput`. If you want to style the wrapper `div`, you can pass your classes via the `wrapperClass`.

Since, `size` is a specified prop of `SfInput`, you won't be able to pass the native `size` attribute to your input element. Instead, you can use the `width` property with `ch` unit instead (eg. `width: 10ch`).

<!-- ## Accessibility notes

Since `SfInput` uses `<input>`, it inherits all the features of the native input. For example, `SfInput` is focusable for keyboard users with `tab`.

Avoid adding `div` tags to slots. If an input element is wrapped in `label` tag (recommended) then it can't have `div` inside. -->

## Playground

<Generate class="playground" style="height: 800px;"/>

#tab-2

## Props

| Prop name       | Type                                   | Default value | Possible values          |
| --------------- | -------------------------------------- | ------------- | ------------------------ |
| `class?`        | `string`                               |               |                          |
| `size?`         | `SfInputSize`                          | `'base'`      | `'sm'`, `'base'`, `'lg'` |
| `invalid?`      | `boolean`                              |               |                          |
| `wrapperClass?` | `string`                               |               |                          |
| `slotPrefix?`   | `boolean`                              |               |                          |
| `slotSuffix?`   | `boolean`                              |               |                          |
| `ref?`          | `Signal<Element>`                      |               |                          |
| `onChange$?`    | `PropFunction<(event: <...>) => void>` |               |                          |

## Slots

| Slot name | Description                |
| --------- | -------------------------- |
| `prefix`  | Left side slotted content  |
| `default` | Slotted content            |
| `suffix`  | Right side slotted content |

#tab-3

## Source code

<<<../../../../packages/qwik-storefront-ui/src/components/SfInput/SfInput.tsx
