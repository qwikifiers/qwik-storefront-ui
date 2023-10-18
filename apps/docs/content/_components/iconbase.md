# Icons

::tabs{:titles='["Usage", "API"]'}

#tab-1

Storefront UI ships with a default set of icons available with the naming convention `SfIcon{Name}`. Each icon is a component that extends the `SfIconBase` component.

<!-- ## List of icons

List of all icons shipped with Storefront UI below. Click on any of the icons to copy its name.

<Showcase showcase-name="IconBase/ListOfIcons"  allow="clipboard-write">

<<<../../../website/src/routes/showcases/IconBase/ListOfIcons/index.tsx -->

</Showcase>

## Examples

### Sizes

All Icon components supports various sizes that can be set with the `size` prop: `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`.

<Showcase showcase-name="IconBase/IconBaseSizes" style="min-height:300px">

<<<../../../website/src/routes/showcases/IconBase/IconBaseSizes/index.tsx

</Showcase>

### Colors

All Icon components inherit the current text color using Tailwind's [`fill-current`](https://tailwindcss.com/docs/fill) class. You can customize the color of an icon with any of Tailwind's [`text color`](https://tailwindcss.com/docs/text-color) classes.

<Showcase showcase-name="IconBase/IconBaseColors">

<<<../../../website/src/routes/showcases/IconBase/IconBaseColors/index.tsx

</Showcase>

### Custom icon

The `SfIconBase` component supports displaying of a custom SVG icon.

You can pass SVG content either via `content` prop or as a default slot.

If you're using a custom icon, you need to specify either the `viewBox` or `width`/`height` attributes for the SVG to render correctly.

<Showcase showcase-name="IconBase/CustomIcon">

<<<../../../website/src/routes/showcases/IconBase/CustomIcon/index.tsx

</Showcase>

## Notes

Storefront UI icons are generated with use of [`createIcons.js`](https://github.com/vuestorefront/storefront-ui/blob/v2/createIcons.js) script and they are based on `IconBase` component.

<!-- ## Accessibility notes

When using an Icon without any additional label and/or description, you should specify an `aria-label` on the icon component. -->

## Playground

<Generate class="playground" />

#tab-2

| Prop name | Type         | Default value | Possible values                                                     |
| --------- | ------------ | ------------- | ------------------------------------------------------------------- |
| `size`    | `SfIconSize` | `'base'`      | `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'` |

## Slots

| Slot name | Description                                |
| --------- | ------------------------------------------ |
| `default` | Content of an SVG, e.g. `<path d='...'/>`. |
