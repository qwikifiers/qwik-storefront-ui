import { useSignal, useTask$ } from '@builder.io/qwik';
import { focusVisibleManager } from '../../../../shared/focusVisibleManager/focusVisibleManager';
import {
  FocusHandlerEvent,
  FocusModality,
} from '../../../../shared/focusVisibleManager/types';
import { FocusVisibleProps, FocusVisibleResult } from './types';

const manager = focusVisibleManager();

export const useFocusVisible = (
  props: FocusVisibleProps = {}
): FocusVisibleResult => {
  manager.setupGlobalFocusEvents();
  const { isTextInput, autoFocus } = props;

  const isFocusVisible = useSignal(autoFocus || manager.isFocusVisible());

  useTask$(() => {
    const handler = (modality: FocusModality, e: FocusHandlerEvent) => {
      if (!manager.isKeyboardFocusEvent(isTextInput, modality, e)) {
        return;
      }
      isFocusVisible.value = manager.isFocusVisible();
    };
    manager.changeHandlers.add(handler);
    return () => {
      manager.changeHandlers.delete(handler);
    };
  });

  return { isFocusVisible: isFocusVisible.value };
};
