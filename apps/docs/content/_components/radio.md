# Radio

::tabs{:titles='["Usage", "API", "Source code"]'}

#tab-1

`SfRadio` provides additional styles for different states of `<input type="radio">`. It can be used for choosing between a list of values when only one option can be selected at a time.

<!--
::tip
If you need to make this field required, it is crucial to communicate this intention clearly to your end users. You can find more information about [required form fields in our guide here](../blocks/FormFields.html).
::
 -->

## Examples

### Basic Usage

<Showcase showcase-name="Radio/RadioWithoutLabel">

<<<../../../website/src/routes/showcases/Radio/RadioWithoutLabel/index.tsx

</Showcase>

### Radio with leading control

It's a best practice to use label with your `SfRadio` component so users can understand what the input is for.

<Showcase showcase-name="Radio/RadioLeading">

<<<../../../website/src/routes/showcases/Radio/RadioLeading/index.tsx

</Showcase>

### Radio with trailing control

<Showcase showcase-name="Radio/RadioTrailing">

<<<../../../website/src/routes/showcases/Radio/RadioTrailing/index.tsx

</Showcase>

<!--
### With legend

Radio Group can have a `legend` tag, which represents a caption for the content of its parent `fieldset` tag.

<Showcase showcase-name="RadioGroup/RadioGroupWithLegend">

<<<../../../website/src/routes/showcases/RadioGroup/RadioGroupWithLegend/index.tsx

</Showcase>

### Group Alignment

Radio components can be aligned inside RadioGroup in a `column` or in a `row`.

<Showcase showcase-name="RadioGroup/RadioGroupAlignment" >

<<<../../../website/src/routes/showcases/RadioGroup/RadioGroupAlignment/index.tsx

</Showcase> -->

<!--
## Accessibility notes

You can provide a bigger hit area for your radio buttons by making your `label` element another trigger for the radio button. This can be done by wrapping the `input` element in a `label` element.

When multiple radio elements are grouped together, one of their parent elements should have [`role="radiogroup"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role). This will help indicate which radio inputs affect the same value.

If you have an element that is not an `<input type="radio">`, you should set the [role="radio"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role) so that it is recognized as a radio button.
 -->

## Playground

<Generate class="playground" style="height: 700px;" />

#tab-2

## Props

| Prop name   | Type                                                               | Default value | Possible values |
| ----------- | ------------------------------------------------------------------ | ------------- | --------------- |
| `class?`    | `string`                                                           |               |                 |
| `ref?`      | `Signal<Element>`                                                  |               |                 |
| `invalid?`  | `boolean`                                                          | `false`       |                 |
| `onChange$` | `PropFunction<(event: QwikChangeEvent<HTMLInputElement>) => void>` |               |                 |

#tab-3

## Source code

<<<../../../../packages/qwik-storefront-ui/src/components/SfRadio/SfRadio.tsx
