# Textarea component

::tabs{:titles='["Usage", "API"]' class="mt-8"}

#tab-1

The Textarea is a multi-line text input control allows users to enter any combination of letters, numbers, or symbols. It adds default styles to the native `<textarea>` HTML tag, providing a consistent and visually appealing appearance out of the box. The component supports autoresizing based on the content entered by the user and provides the option to display a character count.

### Textarea in disabled state

`SfTextarea` comes with out-of-the-box styles for a disabled Textarea.

<Showcase showcase-name="Textarea/TextareaDisabled">

<<<../../../website/src/routes/showcases/Textarea/TextareaDisabled/index.tsx

</Showcase>

### Readonly Textarea

`SfTextarea` comes with out-of-the-box styles for a readonly Textarea.

<Showcase showcase-name="Textarea/TextareaReadonly">

<<<../../../website/src/routes/showcases/Textarea/TextareaReadonly/index.tsx

</Showcase>

### Invalid State

If you pass the `invalid` prop, the Textarea will be styled to indicate an invalid state.

<Showcase showcase-name="Textarea/TextareaInvalid" style="min-height: 200px;">

<<<../../../website/src/routes/showcases/Textarea/TextareaInvalid/index.tsx

</Showcase>

### Textarea with characters counter

The Textarea component provides the option to display a character count, allowing users to track the number of characters they have entered. This feature can be helpful when there are character limits or restrictions for the input.

<Showcase showcase-name="Textarea/TextareaCharacters">

<<<../../../website/src/routes/showcases/Textarea/TextareaCharacters/index.tsx

</Showcase>

### Textarea with autoresize

The Textarea component supports autoresizing based on the content entered by the user. As the user types or deletes text, the height of the textarea adjusts automatically to fit the content, eliminating the need for scrollbars. In the example below we use [`@frsource/autoresize-textarea`](https://www.frsource.org/autoresize-textarea/) library to provide this feature.

<Showcase showcase-name="Textarea/TextareaAutoresize">

<<<../../../website/src/routes/showcases/Textarea/TextareaAutoresize/index.tsx

</Showcase>

<!--
## Accessibility notes

Textarea is multi-line input, so Return or Enter key inserts a line break.
 -->

## Playground

<Generate class="playground" style="height: 800px;" />

#tab-2

## Props

| Prop name       | Type                                   | Default value | Possible values          |
| --------------- | -------------------------------------- | ------------- | ------------------------ |
| `onInput$?`     | `PropFunction<(event: Event) => void>` |               |                          |
| `size?`         | `SfInputSize`                          | `'base'`      | `'sm'`, `'base'`, `'lg'` |
| `invalid?`      | `boolean`                              |               |                          |
| `wrapperClass?` | `string[]`                             |               |                          |
| `style?`        | `CSSProperties`                        |               |                          |
