# AccordionItem

::tabs{:titles='["Usage", "API"]'}

#tab-1
The `SfAccordionItem` component is a wrapper around the native `<details>` and `<summary>` HTML elements. It allows you to create an accordion component that expands and collapses content.

The root element of this component is `<details>`, and any attributes that you apply onto the `SfAccordionItem` component will be passed to the `<details>` element. The one exception is the `onToggle$` attribute. The component prevents the native browser behavior and implements its own `onToggle$` handler.

## Examples

### Basic Accordion

To control the state of the accordion, you can use the `open` prop. This prop is a boolean that indicates whether the accordion is open or closed.

<Showcase showcase-name="AccordionItem/BasicAccordion" style="min-height:400px">

<<<../../../website/src/routes/showcases/AccordionItem/BasicAccordion/index.tsx

</Showcase>

### Accordion Group

This example only allows one item to be open at a time.

<Showcase showcase-name="AccordionItem/CollapsableAccordion" style="min-height:400px">

<<<../../../website/src/routes/showcases/AccordionItem/CollapsableAccordion/index.tsx

</Showcase>

<!-- ### Animated

Animate AccordionItem to give that nice feeling of smooth transition.

<Showcase showcase-name="AccordionItem/AccordionAnimate" style="min-height:400px">

<<<../../../website/src/routes/showcases/AccordionItem/AccordionAnimate/index.tsx

</Showcase>

## Accessibility Notes

Since `SfAccordion` uses `<details>` and `<summary>` HTML elements, it inherits all of their accessibility features.

For example, `<summary>` elements are focusable and can be activated by pressing the `Enter` or `Space` keys. -->

## Playground

<Generate />

#tab-2

## Props

| Prop name      | Type                                    | Default value | Possible values |
| -------------- | --------------------------------------- | ------------- | --------------- |
| `open`         | `boolean`                               | false         |                 |
| `ref?`         | `Signal<Element>`                       |               |                 |
| `summaryClass` | `string`                                |               |                 |
| `onToggle$?`   | `PropFunction<(open: boolean) => void>` |               |                 |

::
