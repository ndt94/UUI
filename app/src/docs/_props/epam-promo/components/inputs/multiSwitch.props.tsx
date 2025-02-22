import React from 'react';
import { ColorPicker, DocBuilder, isDisabledDoc } from '@epam/uui-docs';
import { MultiSwitch, MultiSwitchProps } from '@epam/promo';
import {
    DefaultContext, FormContext, sizeDoc, iEditable,
} from '../../docs';
import { colors } from '../../docs/helpers/colorMap';

const multiSwitchDoc = new DocBuilder<MultiSwitchProps<any>>({ name: 'MultiSwitch', component: MultiSwitch })
    .implements([
        sizeDoc, iEditable, isDisabledDoc,
    ])
    .prop('items', {
        examples: [
            {
                name: 'Context Switch',
                value: [
                    { id: 1, caption: 'Form' }, { id: 2, caption: 'Default' }, { id: 3, caption: 'Resizable' },
                ],
                isDefault: true,
            }, {
                name: 'Toggle Switch',
                value: [{ id: 1, caption: 'On' }, { id: 2, caption: 'Off' }],
            },
        ],
        isRequired: true,
    })
    .prop('color', {
        renderEditor: (editable, examples) => <ColorPicker colors={ examples.map((i) => ({ value: i, hex: colors[i] })) } { ...editable } />,
        examples: ['blue', 'gray'],
    })
    .withContexts(DefaultContext, FormContext);

export default multiSwitchDoc;
