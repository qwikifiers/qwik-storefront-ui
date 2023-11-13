import { Slot, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { SfModalProps } from './types';

const defaultModalTag = 'div';

export const SfModal = component$<SfModalProps>(
  ({
    as,
    open,
    disableClickAway,
    disableEsc,
    onClose$,
    class: _class,
    ...attributes
  }) => {
    const Tag = as || defaultModalTag;
    const elementRef = useSignal<Element>();

    // TODO
    // const modalRef = useRef(null);
    // useClickAway(modalRef, () => {
    //   if (disableClickAway) return;
    //   onClose?.();
    // });

    // TODO
    // useTrapFocus(modalRef, {
    //   activeState: open,
    //   initialFocus: InitialFocusType.autofocus,
    //   initialFocusContainerFallback: true,
    // });

    useVisibleTask$(({ cleanup }) => {
      const handleClick = (event: Event) => {
        console.log('open value:', open);
        if (
          !disableClickAway &&
          !elementRef.value?.contains(event.target as Node) &&
          open
        ) {
          console.log('OUTSIDE');
          onClose$ && onClose$();
        }
      };
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!disableEsc && event.key === 'Escape' && open) {
          console.log('keydown esc');
          onClose$ && onClose$();
        }
      };

      document.addEventListener('click', handleClick);
      document.addEventListener('keydown', handleKeyDown);

      cleanup(() => {
        document.removeEventListener('click', handleClick);
        document.removeEventListener('keydown', handleKeyDown);
      });
    });

    return open ? (
      <Tag
        ref={elementRef ? elementRef : {}}
        class={`fixed inset-0 w-fit h-fit m-auto p-6 pt-10 lg:p-10 border border-neutral-100 bg-white shadow-xl rounded-xl outline-none 
          ${_class}`}
        tabIndex="-1"
        aria-modal="true"
        data-testid="modal"
        {...attributes}
        disableEsc={disableEsc}
        disableClickAway={disableClickAway}
      >
        <Slot />
      </Tag>
    ) : null;
  }
);

export default SfModal;
