# Search

The Search is a specialized input field designed for text-based searching on a website. In the provided example, the block includes an additional feature that displays live hints suggestions (autocomplete) as the user types.

The Search input is primarily utilized in the global navigation (see NavBarTop block). However, variants without autocomplete functionality are commonly employed on results pages.

## Accessibility notes

The Search fully supports the use of the keyboard. The transition from the search input to the hints list is handled by Tab key.

## Basic search

Simple search with an autocomplete functionality. Give your users hints of what they may look for. In this example we use mock autocomplete example, make sure you provide real data.

<Showcase showcase-name="Search/SearchBasic" style="min-height: 350px">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Search/SearchBasic.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Search/SearchBasic.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Search/SearchBasic/index.tsx
::

</Showcase>

## Search with custom icon

This block enhances search functionality with a custom icon and categorized result suggestions.

<Showcase showcase-name="Search/SearchWithIcon" style="min-height: 500px">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Search/SearchWithIcon.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Search/SearchWithIcon.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Search/SearchWithIcon/index.tsx
::

</Showcase>

## Search with custom button

This block enhances search functionality with a custom button, categorized result suggestions and thumbnails.

<Showcase showcase-name="Search/SearchWithButton" style="min-height: 500px">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Search/SearchWithButton.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Search/SearchWithButton.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Search/SearchWithButton/index.tsx
::

</Showcase>
