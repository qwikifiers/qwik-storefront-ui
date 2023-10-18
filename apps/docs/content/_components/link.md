# Link

::tabs{:titles='["Usage", "API"]'}

#tab-1

`SfLink` is a component that allows you to create a consistent link style across your application.

## Examples

### Link variants

`SfLink` supports 2 variants that can be set via `variant` prop: `'primary'`, `'secondary'`.

<Showcase showcase-name="Link/LinkVariants">

<<<../../../website/src/routes/showcases/Link/LinkVariants/index.tsx

</Showcase>

### Customization

When using the `'secondary'` variant, the text color of the base state is inherited from the parent element.

<!-- You can [customize your color palette](../customization/theming.html) as a part of your Tailwind config. -->

<Showcase showcase-name="Link/Customization">

<<<../../../website/src/routes/showcases/Link/Customization/index.tsx

</Showcase>

::tip Need more customization?

If you need more customization beyond the built-in variants, we recommend copying the `SfLink` [source code](#source) and modifying it to your needs. This way, you can have all the custom styles for your design system, but still be able to easily use all of our [Blocks](./blocks.html).
::

<!-- ## Accessibility notes
Link component can be rendered as an `<a>`, `<Link>`, or any other tag by providing it with prop `as`.

When no tag provided, the component will render as an `<a>`. To achieve proper accessibility it is important to implement required properties depending on the passed tag.
-->

### Usage with Qwik Link

`SfLink` can be composed together with `Qwik` link component.

<Showcase showcase-name="Link/QwikLink">
<<<../../../website/src/routes/showcases/Link/QwikLink/index.tsx
</Showcase>

## Playground

<Generate />

#tab-2

## Props

| Prop name  | Type              | Default value | Possible values            |
| ---------- | ----------------- | ------------- | -------------------------- |
| `as?`      |                   |               |                            |
| `ref?`     | `Signal<Element>` |               |                            |
| `class?`   | `string`          |               |                            |
| `variant?` | `SfLinkVariant`   | `'primary'`   | `'primary'`, `'secondary'` |

## Slots

| Slot name | Description     |
| --------- | --------------- |
| `default` | Slotted content |
