# LoaderCircular

::tabs{:titles='["Usage", "API"]'}

#tab-1

`SfLoaderCircular` is animated loading spinner that can be used to show that some content is loading.

## Examples

### Sizes

`SfLoaderCircular` supports various sizes that can be set with the `size` prop: `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`.

<Showcase showcase-name="LoaderCircular/LoaderCircularSizes" style="min-height:320px">

<<<../../../website/src/routes/showcases/LoaderCircular/LoaderCircularSizes/index.tsx

</Showcase>

### Customizing colors

By default, `SfLoaderCircular` uses `primary-700` as the animated shape color (customizable by setting text color) and `neutral-300` for the background ring.

<!-- You can change these values in your [Tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override them for a single element using the [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier). -->

<!--
::tip
Learn more about [overriding default styles](/customization/overriding-default-styles) in Storefront UI.
::
 -->

<Showcase showcase-name="LoaderCircular/LoaderCircularColors">

<<<../../../website/src/routes/showcases/LoaderCircular/LoaderCircularColors/index.tsx

</Showcase>

<!-- ## Accessibility notes

`SfLoaderCircular` uses `aria-live="polite"` to allow screen readers to read the loading status. This can be overriden by passing your own `aria-live` value to the component.

It's important to properly set `aria-label` for screen readers to read proper information while target component is loading. Default value is set to `loading`. -->

## Playground

<Generate class="playground" />

#tab-2

## Props

| Prop name   | Type           | Default value | Possible values                                              |
| ----------- | -------------- | ------------- | ------------------------------------------------------------ |
| `class`     | `string`       |               |                                                              |
| `size`      | `SfLoaderSize` | `'base'`      | `'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'`,`'2xl'`,`'3xl'`,`'4xl'` |
| `ariaLabel` | `string`       | `'loading'`   |                                                              |
