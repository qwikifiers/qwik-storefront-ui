import { $, component$, useContext, useSignal } from '@builder.io/qwik';
import {
  SfButton,
  SfButtonSize,
  SfButtonVariant,
  SfIconExpandLess,
  SfIconExpandMore,
} from 'qwik-storefront-ui';
import { EXAMPLES_STATE } from '../../routes/examples/layout';
import { ControlOptionBind, ControlsType } from './types';

export const Controls = component$<any>(() => {
  const examplesState = useContext(EXAMPLES_STATE);
  const previewBottomOpenSignal = useSignal(true);

  const handleOnChangeValue = $((name: string, value: string) => {
    examplesState.data.state = {
      ...examplesState.data.state,
      [name]: value,
    };
  });

  const handleJsonOnChangeValue = $((el: HTMLTextAreaElement, name: string) => {
    examplesState.data.state = {
      ...examplesState.data.state,
      [name]: JSON.parse(el.value),
    };
  });

  const handleCheckbox = $(
    (
      el: HTMLInputElement,
      name: string,
      currentValue: string | boolean | []
    ) => {
      const { value } = el;
      if (Array.isArray(currentValue)) {
        const newValue: string[] = [...currentValue];
        const valueItemIndex = newValue.indexOf(value);
        if (valueItemIndex === -1) {
          newValue.push(value);
        } else {
          newValue.splice(valueItemIndex, 1);
        }
        examplesState.data.state = {
          ...examplesState.data.state,
          [name]: newValue,
        };
      } else {
        examplesState.data.state = {
          ...examplesState.data.state,
          [name]:
            typeof currentValue === 'string'
              ? currentValue === value
              : !currentValue,
        };
      }
    }
  );

  const checkboxValue = (option: ControlOptionBind | string) =>
    typeof option === 'string' ? option : option.value || option.label;

  return (
    <div
      class={{
        class: true,
        'e-page-controls': true,
        'e-page-controls--collapsed': !previewBottomOpenSignal.value,
      }}
    >
      <div class="heading-wrapper">
        <h1 class="heading">Controls</h1>
        <SfButton
          variant={SfButtonVariant.tertiary}
          size={SfButtonSize.sm}
          onClick$={() => {
            previewBottomOpenSignal.value = !previewBottomOpenSignal.value;
          }}
        >
          <div
            q:slot="suffix"
            style={{
              display: previewBottomOpenSignal.value ? 'none' : 'block',
            }}
          >
            <SfIconExpandMore />
          </div>
          <div
            q:slot="suffix"
            style={{
              display: previewBottomOpenSignal.value ? 'block' : 'none',
            }}
          >
            <SfIconExpandLess />
          </div>
          {previewBottomOpenSignal.value ? 'Close' : 'Open'}
        </SfButton>
      </div>
      <div class="table-wrapper">
        <table aria-label="Controls table">
          <thead class="table-heading">
            <tr>
              <th class="whitespace-nowrap">Prop Name</th>
              <th class="whitespace-nowrap">Value</th>
              <th class="whitespace-nowrap">Type</th>
              <th class="whitespace-nowrap">Default Value</th>
              <th class="whitespace-nowrap">Required</th>
              <th class="whitespace-nowrap">Description</th>
            </tr>
          </thead>
          <tbody>
            {(examplesState.data.controls || []).map(
              (control, index: number) => (
                <tr key={index} class="props">
                  <td
                    class={`${
                      control.type !== 'checkbox' && control.type !== 'radio'
                        ? 'align-middle'
                        : 'align-top'
                    }`}
                  >
                    <span id={control.modelName}>{control.modelName}</span>
                  </td>
                  <td class="value">
                    {control.type === 'boolean' ? (
                      <div class="switch-wrapper">
                        <label class="switch">
                          <input
                            checked={
                              examplesState.data.state[control.modelName]
                            }
                            value={examplesState.data.state[control.modelName]}
                            aria-labelledby={control.modelName}
                            onChange$={() => {
                              examplesState.data.state = {
                                ...examplesState.data.state,
                                [control.modelName]:
                                  !examplesState.data.state[control.modelName],
                              };
                            }}
                            type="checkbox"
                          />
                          <span class="slider" />
                        </label>
                        <span class="ml-2">
                          {examplesState.data.state[
                            control.modelName
                          ]?.toString()}
                        </span>
                      </div>
                    ) : control.type === 'select' ? (
                      <select
                        value={examplesState.data.state[control.modelName]}
                        aria-labelledby={control.modelName}
                        onChange$={(_: Event, el: HTMLSelectElement) => {
                          handleOnChangeValue(control.modelName, el.value);
                        }}
                      >
                        {(
                          control?.options ||
                          ([{}] as NonNullable<ControlsType[number]['options']>)
                        ).map((option, optionIndex) => (
                          <option
                            key={`${control.modelName}-${index}-${optionIndex}`}
                            value={
                              (option as ControlOptionBind).value ||
                              (option as ControlOptionBind).label ||
                              (option as string)
                            }
                          >
                            {(option as ControlOptionBind).label ||
                              (option as string)}
                          </option>
                        ))}
                      </select>
                    ) : (
                      (
                        control?.options ||
                        ([{}] as NonNullable<ControlsType[number]['options']>)
                      ).map((option, optionIndex) => (
                        <div
                          key={`${control.modelName}-${index}-${optionIndex}`}
                          class="flex items-center"
                        >
                          <label class="flex items-center">
                            {(() => {
                              switch (control.type) {
                                case 'label':
                                  return (
                                    <span>
                                      {
                                        examplesState.data.state[
                                          control.modelName
                                        ]
                                      }
                                      &nbsp;
                                    </span>
                                  );
                                case 'json':
                                  return (
                                    <textarea
                                      rows={10}
                                      {...(option as ControlOptionBind).bind}
                                      class="border rounded-md"
                                      aria-labelledby={control.modelName}
                                      value={
                                        JSON.stringify(
                                          examplesState.data.state[
                                            control.modelName
                                          ],
                                          undefined,
                                          2
                                        ) as string
                                      }
                                      onChange$={(
                                        _: Event,
                                        el: HTMLTextAreaElement
                                      ) => {
                                        handleJsonOnChangeValue(
                                          el,
                                          control.modelName
                                        );
                                      }}
                                    />
                                  );
                                case 'range':
                                case 'text':
                                  return (
                                    <input
                                      {...(option as ControlOptionBind).bind}
                                      value={
                                        examplesState.data.state[
                                          control.modelName
                                        ] as number | string
                                      }
                                      class="border rounded-md"
                                      type={control.type}
                                      aria-labelledby={control.modelName}
                                      onKeyDown$={(e: any) => {
                                        handleOnChangeValue(
                                          control.modelName,
                                          e.target.value
                                        );
                                      }}
                                      onChange$={(e: any) => {
                                        handleOnChangeValue(
                                          control.modelName,
                                          e.target.value
                                        );
                                      }}
                                    />
                                  );
                                default:
                                  return (
                                    <input
                                      {...(option as ControlOptionBind).bind}
                                      value={checkboxValue(option)}
                                      type={control.type}
                                      aria-labelledby={control.modelName}
                                      onChange$={(
                                        _: Event,
                                        el: HTMLInputElement
                                      ) => {
                                        control.type === 'checkbox'
                                          ? handleCheckbox(
                                              el,
                                              control.modelName,
                                              examplesState.data.state[
                                                control.modelName
                                              ]
                                            )
                                          : handleOnChangeValue(
                                              control.modelName,
                                              el.value
                                            );
                                      }}
                                      name={`${control.modelName}-${index}`}
                                    />
                                  );
                              }
                            })()}
                            {typeof option === 'string' ? (
                              <span class="pl-2">{option}</span>
                            ) : (
                              'label' in option && (
                                <span class="pl-2">
                                  {(option as ControlOptionBind).label}
                                </span>
                              )
                            )}
                          </label>
                        </div>
                      ))
                    )}
                  </td>
                  <td class="propType">
                    <span>{control.propType}</span>
                  </td>
                  <td class="propDefaultValue">{control.propDefaultValue}</td>
                  <td class="required">{control?.isRequired?.toString()}</td>
                  <td class="description">{control.description}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
});
