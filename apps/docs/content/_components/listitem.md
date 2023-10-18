# ListItem

::tabs{:titles='["Usage", "API"]'}

#tab-1

`SfListItem` is a component that can be used in all sorts of menus. It comes with styles for common data states like `disabled` and `selected`.

## Examples

### ListItem sizes

`SfListItem` supports 3 sizes that can be set with the `size` prop: `'sm'`, `'base'`, `'lg'`.

<Showcase showcase-name="ListItem/ListItemSizes" style="min-height:250px">

<<<../../../website/src/routes/showcases/ListItem/ListItemSizes/index.tsx

</Showcase>

### ListItem slots

`SfListItem` provides `prefix` and `suffix` slots that you can use to add custom content before/after your default content. This can be useful for adding inputs, thumbnails, icons, or any other content to your list items.

<Showcase showcase-name="ListItem/ListItemSlots" >

<<<../../../website/src/routes/showcases/ListItem/ListItemSlots/index.tsx

</Showcase>

### ListItem truncate

For items with a lot of text content, you can use Tailwind's `truncate` class.

<Showcase showcase-name="ListItem/ListItemTruncated" >

<<<../../../website/src/routes/showcases/ListItem/ListItemTruncated/index.tsx

</Showcase>

<!-- ## Accessibility notes

ListItem component can be rendered as an `<li>` or `<a>` or any other tag by providing it with prop `as`.

When no tag provided, the component will render as an `<li>`. To achieve proper accessibility it is important to implement required properties depending on the passed tag. -->

## Playground

<Generate style="height: 700px;" />

#tab-2

## Props

| Prop name     | Type              | Default value | Possible values          |
| ------------- | ----------------- | ------------- | ------------------------ |
| `as?`         |                   |               |                          |
| `ref?`        | `Signal<Element>` |               |                          |
| `class?`      | `string`          |               |                          |
| `size?`       | `SfListItemSize`  | `'base'`      | `'sm'`, `'base'`, `'lg'` |
| `disabled?`   | `boolean`         |               |                          |
| `selected?`   | `boolean`         |               |                          |
| `role?`       | `string`          |               |                          |
| `slotPrefix?` | `boolean`         |               |                          |
| `slotSuffix?` | `boolean`         |               |                          |

## Slots

| Slot name | Description                |
| --------- | -------------------------- |
| `prefix`  | Left side slotted content  |
| `default` | Slotted content            |
| `suffix`  | Right side slotted content |
