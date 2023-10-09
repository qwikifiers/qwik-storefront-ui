import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfBadge, SfBadgePlacement, SfBadgeVariant, SfButton, SfIconShoppingCart } from 'qwik-storefront-ui';
import { ComponentExample } from '../../../components/utils/ComponentExample';
import { ControlsType } from '../../../components/utils/types';
import { EXAMPLES_STATE } from '../layout';

export default component$(() => {

    const examplesState = useContext(EXAMPLES_STATE);

    useTask$(() => {
        examplesState.data = {
            controls: [
                {
                    type: 'text',
                    modelName: 'content',
                    description: 'Content to display in the badge.',
                    propType: 'string | number',
                },
                {
                    type: 'text',
                    modelName: 'max',
                    description: 'Maximum number of counter to show.',
                    propType: 'number',
                    propDefaultValue: '99',
                },
                {
                    type: 'select',
                    modelName: 'variant',
                    description: 'Badge can have content or be a simple dot.',
                    options: Object.values(SfBadgeVariant),
                    propType: 'SfBadgeVariant',
                    propDefaultValue: 'standard',
                },
                {
                    type: 'select',
                    modelName: 'placement',
                    description: 'Position of the badge relatively to a container.',
                    options: Object.values(SfBadgePlacement),
                    propType: 'SfBadgePlacement',
                    propDefaultValue: 'top-right',
                },
            ] satisfies ControlsType,

            state: {
                content: '1',
                max: 99,
                variant: SfBadgeVariant.standard,
                placement: SfBadgePlacement['top-right'],
            }
        }
    });

    return (
        <ComponentExample>
            <SfButton class="relative" square variant="tertiary">
                <SfIconShoppingCart />
                <SfBadge {...examplesState.data.state} max={Number(examplesState.data.state.max)} />
            </SfButton>
        </ComponentExample>
    );
});