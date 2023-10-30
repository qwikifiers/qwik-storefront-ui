# Gallery

::warning This is an experimental block
This block has been built on top of experimental base component. The API and structure of it might change based on user feedback.
::

The Gallery presents a visually appealing and user-friendly collection of images that can be conveniently viewed and navigated. Within the example block, navigation options include "previous/next" arrows and photo thumbnails, providing users with multiple ways to interact with the gallery. These navigation features can be activated through both clicks and hover actions.

The Gallery is primarily intended for use on product pages, where it serves as an effective tool for showcasing product images. The choice between the vertical and horizontal variants should depend on the layout of the product page, ensuring optimal visual presentation. Additionally, the variant with bullets should be considered, particularly for mobile devices, as it offers a compact and easily accessible navigation format.

## Accessibility notes

The Gallery supports the use of the keyboard (Tab/shift+Tab) to navigate through images.

## Product Gallery with vertical thumbnails

Changing an image is provided by hover on the thumbnail or dragging the main image. There are buttons to scroll thumbnails up and down.

<Showcase showcase-name="Gallery/GalleryVertical" style="min-height:700px">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Gallery/GalleryVertical.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Gallery/GalleryVertical.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Gallery/GalleryVertical/index.tsx
::

</Showcase>

## Product Gallery with horizontal thumbnails

Changing an image is provided by click on the thumbnail or dragging the main image. You can scroll thumbnails by click on the button.

<Showcase showcase-name="Gallery/GalleryHorizontal" style="min-height:700px">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Gallery/GalleryHorizontal.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Gallery/GalleryHorizontal.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Gallery/GalleryHorizontal/index.tsx
::

</Showcase>

## Product Gallery with bullets

Changing an image is provided by click on the buttons which are visible after hovering on the main image. Currently displayed image is highlighted by the bullets below the main image.

<Showcase showcase-name="Gallery/GalleryWithBullets" style="min-height:700px">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Gallery/GalleryWithBullets.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Gallery/GalleryWithBullets.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Gallery/GalleryWithBullets/index.tsx
::

</Showcase>

## Product Gallery with arrow key navigation

In this block there is added arrow key navigation. When focus is on one of the thumbnails it's possible to change currently displayed image by pressing arrow keys - arrow up and arrow right will show a next image and arrow down and arrow left will show a previous image.

<Showcase showcase-name="Gallery/GalleryHorizontalArrowKeyNavigation" style="min-height:700px">

::vue-only
<<<../../../preview/nuxt/pages/showcases/Gallery/GalleryHorizontalArrowKeyNavigation.vue
::
::react-only
<<<../../../preview/next/pages/showcases/Gallery/GalleryHorizontalArrowKeyNavigation.tsx
::
::qwik-only
<<<../../../website/src/routes/showcases/Gallery/GalleryHorizontalArrowKeyNavigation/index.tsx
::

</Showcase>
