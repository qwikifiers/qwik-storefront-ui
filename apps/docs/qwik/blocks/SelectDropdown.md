---
blockCount: 5
repoPath: /blocks/SelectDropdown.md
layout: DefaultLayout
hideBreadcrumbs: true
description: The SelectDropdown is a visually customized version of the Select component, eliminating the reliance on the native "select" HTML tag.
hideToc: true
---
# Select Dropdown

The SelectDropdown is a visually customized version of the Select component, eliminating the reliance on the native "select" HTML tag. Despite the stylistic changes, the functionality of the component remains unchanged, allowing users to make a single selection from a dropdown list. The input can be marked as required and may include hints or additional information.

Please note that the example block provided can also serve as a base component, offering flexibility for implementation within the project based on specific requirements and design considerations.

## Accessibility notes

The SelectDropdown fully supports the use of the keyboard.

## Basic usage

Select Dropdown with preselected option.

<Showcase showcase-name="SelectDropdown/SelectDropdownPreselected" style="min-height:300px">

<<<../../preview/nuxt/pages/showcases/SelectDropdown/SelectDropdownPreselected.vue

</Showcase>

## With placeholder

Adding placeholder might be helpful and informative for end users.

<Showcase showcase-name="SelectDropdown/SelectDropdownWithPlaceholder" style="min-height:300px">
<<<../../preview/nuxt/pages/showcases/SelectDropdown/SelectDropdownWithPlaceholder.vue
</Showcase>

## With required text

By adding a sublabel, the user can easily see if this field is required. Remember to add `aria-required` to help users that use assistive technologies.

<Showcase showcase-name="SelectDropdown/SelectDropdownRequired" style="min-height:300px">

<<<../../preview/nuxt/pages/showcases/SelectDropdown/SelectDropdownRequired.vue

</Showcase>

## Invalid state

Provide visual cues for end users to indicate occuring error.

<Showcase showcase-name="SelectDropdown/SelectDropdownError" style="min-height:300px">

<<<../../preview/nuxt/pages/showcases/SelectDropdown/SelectDropdownError.vue

</Showcase>

## Disabled state

Differentiate disabled state to smooth UX experience. In such case, keyboard navigation becomes disabled as well and an `aria-disabled="true"` is specified for better accessibility.

<Showcase showcase-name="SelectDropdown/SelectDropdownDisabled" style="min-height:300px">

<<<../../preview/nuxt/pages/showcases/SelectDropdown/SelectDropdownDisabled.vue

</Showcase>
