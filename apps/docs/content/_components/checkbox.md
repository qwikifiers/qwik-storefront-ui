# Checkbox

::tabs{:titles='["Usage", "API", "Source code"]'}

#tab-1

`SfCheckbox` is a wrapper around `<input type="checkbox">` with additional styles for different states. It can be used for forms or expressing consents.

The root element is an `<input>` so any attributes that can be used on an `<input>` can be used on `SfCheckbox`.

## Examples

### Checkbox without label

<Showcase showcase-name="Checkbox/CheckboxWithoutLabel">

<<<../../../website/src/routes/showcases/Checkbox/CheckboxWithoutLabel/index.tsx

</Showcase>

### Checkbox aligned to the left

When using `SfCheckbox` with a label, you can use Tailwind's `peer` modifiers to control the styles of the label based on the state of the checkbox.

<Showcase showcase-name="Checkbox/CheckboxLeading">

<<<../../../website/src/routes/showcases/Checkbox/CheckboxLeading/index.tsx

</Showcase>

### Checkbox aligned to the right

<Showcase showcase-name="Checkbox/CheckboxTrailing">

<<<../../../website/src/routes/showcases/Checkbox/CheckboxTrailing/index.tsx

</Showcase>

<!-- ## Accessibility notes

`SfCheckbox` is a wrapper for `<input type="checkbox">` so it inherits all the accessibility features of the native checkbox.

It's focusable and can be toggled with `Space`. -->

## Playground

<Generate class="playground" />

#tab-2

## Props

| Prop name    | Type                                                               | Default value | Possible values |
| ------------ | ------------------------------------------------------------------ | ------------- | --------------- |
| `ref?`       | `Signal<Element>`                                                  |               |                 |
| `invalid`    | `boolean`                                                          | `false`       |                 |
| `onChange$?` | `PropFunction<(event: QwikChangeEvent<HTMLInputElement>) => void>` |               |                 |

#tab-3

## Source code

<<<../../../../packages/qwik-storefront-ui/src/components/SfCheckbox/SfCheckbox.tsx
