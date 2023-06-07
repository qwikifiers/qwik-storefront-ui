import type { RequestHandler } from '@builder.io/qwik-city';

export const onRequest: RequestHandler = async ({ redirect }) => {
  // example
  throw redirect(308, '/showcases/AccordionItem/BasicAccordion/');
};
