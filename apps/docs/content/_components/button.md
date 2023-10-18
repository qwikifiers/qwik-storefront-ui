# Button

::tabs{:titles='["Usage", "API"]'}

#tab-1

`SfButton` is an input that allows for user-triggered actions when clicked or pressed. This can be used for submitting forms, opening/closing dialogs, and much more.

## Examples

### Button sizes

`SfButton` supports 3 sizes that can be set with the `size` prop: `'sm'`, `'base'`, `'lg'`.

<Showcase showcase-name="Button/ButtonSizes" style="min-height:250px">

<<<../../../website/src/routes/showcases/Button/ButtonSizes/index.tsx

</Showcase>

### Button variants

`SfButton` supports 3 style variants that can be set via `variant` prop: `'primary'`, `'secondary'`, `'tertiary'`.

<Showcase showcase-name="Button/ButtonVariants" style="min-height:250px">

<<<../../../website/src/routes/showcases/Button/ButtonVariants/index.tsx

</Showcase>

### Button as a link

This component can be used as a link (or any other tag) that can be set via `as`.

<Showcase showcase-name="Button/ButtonAsLink" style="min-height:250px">

<<<../../../website/src/routes/showcases/Button/ButtonAsLink/index.tsx

</Showcase>

### Button block

You can create a full-width button with Tailwind's `w-full` class.

<Showcase showcase-name="Button/ButtonBlock">

<<<../../../website/src/routes/showcases/Button/ButtonBlock/index.tsx

</Showcase>

### Button truncation

You can truncate button content with Tailwind using `max-w-` and `truncate` classes.

<Showcase showcase-name="Button/ButtonTruncation">

<<<../../../website/src/routes/showcases/Button/ButtonTruncation/index.tsx

</Showcase>

### Button content

`SfButton` provides `prefix` and `suffix` slots that you can use to add custom content before/after your default content. This can be useful for adding icons or badges to your buttons.

<Showcase showcase-name="Button/ButtonContent" style="min-height:250px">

<<<../../../website/src/routes/showcases/Button/ButtonContent/index.tsx

</Showcase>

<!-- ## Accessibility notes

Button component can be rendered as `<button>` or `<a>` or any other tag by providing it with prop ::vue-only`tag`::::react-only`as`::. When rendered as `<button>` this component applies default `type='button'` if no other `type` is passed as a prop.

If you need to use Button with non-`<button>` tags like `<div>` you need to add `role='button'`. When this role is added to an element, the browser will send out an accessible alert event to assistive technology products which can then notify the user. You can override this behaviour by passing `role` prop by yourself. -->

## Playground

<Generate />

#tab-2

## Props

| Prop name    | Type                                   | Default value | Possible values                             |
| ------------ | -------------------------------------- | ------------- | ------------------------------------------- |
| `as`         | `ReactElement`                         | `'button'`    | Change button tag to a tag or any other tag |
| `ref?`       | `Signal<Element>`                      |               |                                             |
| `size`       | `VsfButtonSize`                        | `'base'`      | `'sm'`, `'base'`, `'lg'`                    |
| `variant`    | `SfButtonVariant`                      | `'primary'`   | `'primary'`, `'secondary'`, `'tertiary'`    |
| `slotSuffix` | `boolean`                              | `false`       |                                             |
| `slotSuffix` | `boolean`                              | `false`       |                                             |
| `disabled`   | `boolean`                              | `false`       |                                             |
| `square`     | `boolean`                              | `false`       |                                             |
| `onClick$`   | `PropFunction<(event: <...>) => void>` |               |                                             |

## Slots

| Slot name | Description                |
| --------- | -------------------------- |
| `prefix`  | Left side slotted content  |
| `default` | Slotted content            |
| `suffix`  | Right side slotted content |
