# Counter

::tabs{:titles='["Usage", "API", "Source code"]'}

#tab-1

`SfCounter` provides formatting for numerical values. This can be used to show things like quantities of an item or number of reviews. Since it's a part of so many complex components, `SfChip` can be used to provide consistent styles across your application.

## Examples

### Counter

By default, `SfCounter` will put parentheses around its children.

`SfCounter` supports 6 different sizes that can be set with the `size` prop: `'3xs'`, `'2xs'`, `'xs'`, `'sm'`, `'base'`, and `'lg'`. The default size is `'base'`.

<Showcase showcase-name="Counter/Counter">

<<<../../../website/src/routes/showcases/Counter/Counter/index.tsx

</Showcase>

### Counter pill

`SfCounter` accepts a `pill` prop that will create a border around your counter rather than adding parentheses around it.

<Showcase showcase-name="Counter/CounterPill">

<<<../../../website/src/routes/showcases/Counter/CounterPill/index.tsx

</Showcase>

### Customizing Colors

You can customize the colors of `SfCounter` by passing Tailwind classes.

<Showcase showcase-name="Counter/CounterCustomBackground">

<<<../../../website/src/routes/showcases/Counter/CounterCustomBackground/index.tsx

</Showcase>

<!-- ## Accessibility notes

The root element of `SfCounter` is a `<span>`. Since a `<span>` is an inline element, you should avoid placing block elements (like `div` or `p`) inside of it. -->

## Playground

<Generate class="playground" />

#tab-2

## Props

| Prop name | Type            | Default value | Possible values                                    |
| --------- | --------------- | ------------- | -------------------------------------------------- |
| `size?`   | `SfCounterSize` | `'base'`      | `'3xs'`, `'2xs'`, `'xs'`, `'sm'`, `'base'`, `'lg'` |
| `pill?`   | `boolean`       | `false`       |                                                    |
| `class?`  | `string`        |               |                                                    |

## Slots

| Slot name | Description                     |
| --------- | ------------------------------- |
| `default` | To be filled with counter value |

#tab-3

## Source code

<<<../../../../packages/qwik-storefront-ui/src/components/SfCounter/SfCounter.tsx
