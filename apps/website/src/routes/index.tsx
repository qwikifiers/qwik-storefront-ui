import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <h1>DOCS: Qwik Storefront UI </h1>;
});

export const head: DocumentHead = {
  title: 'Qwik Storefront UI',
};
