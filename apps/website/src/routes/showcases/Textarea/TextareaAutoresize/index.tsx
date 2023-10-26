import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { attach } from '@frsource/autoresize-textarea';
import { SfTextarea } from 'qwik-storefront-ui';

export default component$(() => {
  const textareaRef = useSignal<HTMLTextAreaElement>();

  useTask$(() => {
    if (textareaRef.value) {
      attach(textareaRef.value);
    }
  });
  return (
    <>
      <label>
        <span class="typography-text-sm font-medium">Description</span>
        <SfTextarea
          ref={textareaRef}
          wrapperClass={['w-full h-max-[500px] block']}
          size="sm"
          aria-label="Label size sm"
        />
      </label>
      <p class="typography-hint-xs text-neutral-500 mt-0.5">
        Do not include personal or financial information.
      </p>
    </>
  );
});
