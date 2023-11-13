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
        if (
          !disableClickAway &&
          !elementRef.value?.contains(event.target as Node)
        ) {
          onClose$ && onClose$();
        }
      };
      document.addEventListener('click', handleClick);

      const handleKeyDown = (event: KeyboardEvent) => {
        if (!disableEsc && event.key === 'Escape') {
          onClose$ && onClose$();
        }
      };
      document.addEventListener('keydown', handleKeyDown);

      cleanup(() => {
        document.removeEventListener('click', handleClick);
        document.removeEventListener('keydown', handleKeyDown);
      });
    });

    return (
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
    );
  }
);

export default SfModal;
