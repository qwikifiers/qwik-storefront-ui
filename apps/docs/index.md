---
layout: HomeLayout
tabOptions: []
hideBreadcrumbs: true
---

<div class="grid grid-cols-2 custom-block mt-16 gap-8">
  <div class="col-span-2 lg:col-span-1 flex justify-center flex-col order-2 lg:order-1">
    <div class="flex flex-wrap mb-2">
        <a class="github-button" href="https://github.com/qwikifiers/qwik-storefront-ui" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star buttons/github-buttons on GitHub">Star the Project</a>
    </div>
    <h1 class="text-5xl font-extrabold mt-4">Storefront UI</h1>
    <p class="text-xl mt-4">Fast, accessible, and fully customizable components built for e-commerce.</p>
    <div class="mt-8 flex items-center">
      <RouterLink to="/qwik/getting-started.html" class="px-4 py-2 rounded-lg bg-sky-500/100 font-medium text-white flex items-center filter hover:brightness-110 transition-all">
        Install for Qwik
        <iconify-icon icon="mingcute:arrow-right-fill" height="14px" class="ml-2"/>
      </RouterLink>
    </div>
  </div>
  <div class="col-span-2 lg:col-span-1 order-1 lg:order-2">
    <img src='./assets/sfui-hero.png' class=' mx-auto max-w-xs sm:max-w-md'/>
  </div>
</div>

## Base Components

Beautiful, fast, and fully accessible components that integrate with Tailwind CSS to help you quickly build more complex structures.

<ComponentList framework="qwik" type="components" hide-description />

## Composables

Complex UI logic is extracted into composables, which you can use to build your own custom components.

<ComponentList framework="qwik" type="hooks" hide-thumbnail  />

::::::
