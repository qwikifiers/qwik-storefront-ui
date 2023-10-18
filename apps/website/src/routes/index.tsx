import { component$ } from '@builder.io/qwik';
import { SfLink } from 'qwik-storefront-ui';
export default component$(() => (
  <>
    <SfLink href="/examples?show=true">Examples</SfLink>
    <hr />
    <SfLink href="/showcases?show=true">Showcases</SfLink>
  </>
));
