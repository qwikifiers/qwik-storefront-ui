# Dropdown

::tabs{:titles='["Usage", "API"]'}

#tab-1

The `SfDropdown` component.

<!-- is built on top of `useDropdown` and accepts all its params. -->

<!-- Learn more about `useDropdown` hook in the [Hooks > useDropdown docs](/react/hooks/usedropdown). -->

## Examples

### Basic Usage

By default, the floating content of `SfDropdown` will be placed below your trigger element.

<Showcase showcase-name="Dropdown/BasicDropdown" style="min-height:400px">

<<<../../../website/src/routes/showcases/Dropdown/BasicDropdown/index.tsx

</Showcase>

<!-- ## Accessibility notes

The floating content area has an `aria-hidden` attribute that reflects the visibility of the dropdown (`modelValue`). When the dropdown is not open (`modelValue` is `false`), the `aria-hidden` attribute is set to `true`, ensuring that the content is hidden from assistive technologies. -->

## Playground

<Generate />

#tab-2

## Props

| Prop name   | Type                                    | Default value | Possible values |
| ----------- | --------------------------------------- | ------------- | --------------- |
| `style?`    | `QwikIntrinsicElements['div']['style']` |               |                 |
| `ref?`      | `Signal<Element>`                       |               |                 |
| `class?`    | `string`                                |               |                 |
| `open?`     | `boolean`                               |               |                 |
| `onClose$?` | `PropFunction<() => void>`              |               |                 |
