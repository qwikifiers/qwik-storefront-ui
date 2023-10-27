# Drawer

::tabs{:titles='["Usage", "API", "Source code"]'}

#tab-1

`SfDrawer` is a container that can be anchored to the left, right, top or bottom edge of the screen. This can be used to create things like navigation drawers, sliding cart views, or anything else that needs to stick to the edge of the screen. It also adds additional functionality like closing when the user clicks outside of the drawer or presses the escape key.

## Examples

### Basic Usage

`SfDrawer` supports 4 different placements that can be set via `placement` prop: `top`, `right`, `bottom`, `left`.

To open/close the drawer, you can use the the `open` prop and the `onClose$` event

By default, `SfDrawer` will trigger the close event when the user clicks outside of the drawer or presses the escape key. These behaviors can be disabled by setting the `disableClickAway` and `disableEsc` props to `true`.

<Showcase showcase-name="Drawer/Placement" style="min-height:400px">

<<<../../../website/src/routes/showcases/Drawer/Placement/index.tsx

</Showcase>

### Drawer transition and trap focus

You can wrap `SfDrawer` in a [`<CSSTransition>`](https://reactcommunity.org/react-transition-group/css-transition) component to add enter/exit animations.

Additionally, you can use the `useTrapFocus` utility for better control of focusable elements inside.

<Showcase showcase-name="Drawer/TransitionAndCloseButton" style="min-height: 400px;" no-scale>

<<<../../../website/src/routes/showcases/Drawer/TransitionAndCloseButton/index.tsx

</Showcase>

<!-- ## Accessibility notes

The component is providing keyboard accessibility with `@keydown.esc="onEscKeyDown"` and `onClickOutside` function which allows users to close the drawer by pressing the Escape key or click outside of the drawer. -->

## Playground

<Generate class="playground" style="height: 600px;"/>

#tab-2

## Props

| Prop name           | Type                        | Default value | Possible values                          |
| ------------------- | --------------------------- | ------------- | ---------------------------------------- |
| `as?`               |                             |               |                                          |
| `ref?`              | `Signal<Element>`           |               |                                          |
| `open`              | `boolean`                   |               |                                          |
| `class`             | `string`                    |               |                                          |
| `placement?`        | `SfDrawerPlacement`         | `'left'`      | `'top'`, `'bottom'`, `'left'`, `'right'` |
| `disableClickAway?` | `boolean`                   |               |                                          |
| `disableEsc?`       | `boolean`                   |               |                                          |
| `onClose$?`         | `PropFunction<() => false>` |               |                                          |

## Slots

| Slot name | Description             |
| --------- | ----------------------- |
| `default` | Place content of drawer |

#tab-3

## Source code

<<<../../../../packages/qwik-storefront-ui/src/components/SfDrawer/SfDrawer.tsx
