# Rating

::tabs{:titles='["Usage", "API", "Source code"]'}

#tab-1

`SfRating` gives you a nice way to display a rating both with graphics and through text. This can be used to show the rating of a product, score for a review, or any other rating you might need.

## Examples

### Value handling

The `value` prop allows you to set the current rating and max number of stars via `max` prop.

If you need to support partial stars, you can show half-filled star icons by passing the `half-increment` prop.

<Showcase showcase-name="Rating/RatingValues">

<<<../../../website/src/routes/showcases/Rating/RatingValues/index.tsx

</Showcase>

### Sizes

`SfRating` supports 6 sizes that can be set with the `size` prop: `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`.

<Showcase showcase-name="Rating/RatingSizes" style="min-height:250px">

<<<../../../website/src/routes/showcases/Rating/RatingSizes/index.tsx

</Showcase>

### Colors

Rating by default uses a `warning-500` for filled and partially filled stars and `disabled-500` as an empty icon color.

<!--
You can change these values in your [Tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override them for a single element using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).
 -->

<Showcase showcase-name="Rating/RatingColors">

<<<../../../website/src/routes/showcases/Rating/RatingColors/index.tsx

</Showcase>

### Single star with value

For a more minimal look, you can also present ratings a single star icon with a text label.

<Showcase showcase-name="Rating/SingleStar" style="min-height:220px">

<<<../../../website/src/routes/showcases/Rating/SingleStar/index.tsx

</Showcase>

<!--
## Accessibility notes

For better out-of-the-box accessibility, `SfRating` adds `role="img"` and an `aria-label` property with value `Rating: [Avg value] out of [Max value] stars` where the values are replaced with the actual values. This can be overridden by passing an `aria-label` property to the component.
 -->

## Playground

<Generate class="playground" />

#tab-2

## Props

| Prop name        | Type           | Default value | Possible values                      |
| ---------------- | -------------- | ------------- | ------------------------------------ |
| `class?`         | `string`       |               |                                      |
| `value?`         | `number`       | `0`           |                                      |
| `max?`           | `number`       | `5`           |                                      |
| `size?`          | `SfRatingSize` | `'base'`      | `'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'` |
| `halfIncrement?` | `boolean`      | `false`       |                                      |
| `ariaLabel?`     | `string`       |               |                                      |

#tab-3

## Source code

<<<../../../../packages/qwik-storefront-ui/src/components/SfRating/SfRating.tsx
