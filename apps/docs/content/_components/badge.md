# Badge

::tabs{:titles='["Usage", "API", "Source code"]'}

#tab-1

## Examples

### Basic usage

The badge component must be wrapped with a container that has `class="relative"`. You must provide such a container by yourself, but it gives you the flexibility to put the badge wherever you want. Bagde comes with a "dot" variant, which hides the content. When given content is of type number (or string that could be parsed to number), you can set a maximum limit of that number using `max` prop.

<Showcase showcase-name="Badge/BadgeBasic">

<<<../../../website/src/routes/showcases/Badge/BadgeBasic/index.tsx

</Showcase>

### Placement

You can align the Badge in every corner of the container.

<Showcase showcase-name="Badge/BadgePlacement">

<<<../../../website/src/routes/showcases/Badge/BadgePlacement/index.tsx

</Showcase>

### Custom outline

A nifty effect that makes the Badge a bit more attractive is to add an outline that separates the Badge from an element.

<Showcase showcase-name="Badge/BadgeOutline">

<<<../../../website/src/routes/showcases/Badge/BadgeOutline/index.tsx

</Showcase>

### Avatars

A common use case for the Badge is to place it on a user's avatar.

<Showcase showcase-name="Badge/BadgeAvatar">

<<<../../../website/src/routes/showcases/Badge/BadgeAvatar/index.tsx

</Showcase>

<!-- ## Accessibility Notes

The component itself does not provide any specific accessibility features. Please make sure that the content displayed in SfBadge component is meaningful and understandable by all users. -->

## Playground

<Generate class="playground" />

#tab-2

## Props

| Prop name   | Type               | Default value | Possible values                                        |
| ----------- | ------------------ | ------------- | ------------------------------------------------------ |
| `content`   | `string`           | `number`      |                                                        |
| `max`       | `number`           | `99`          |                                                        |
| `variant`   | `SfBadgeVariant`   | `standard`    | `standard`, `dot`                                      |
| `placement` | `SfBadgePlacement` | `top-right`   | `top-right`, `top-left`, `bottom-right`, `bottom-left` |

#tab-3

## Source code

<<<../../../../packages/qwik-storefront-ui/src/components/SfBadge/SfBadge.tsx
