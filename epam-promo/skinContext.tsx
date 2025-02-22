import {
    ISkin, skinComponent, SkinContextComponentProps, ButtonCoreProps,
} from '@epam/uui-core';
import {
    FlexRow, TextInput, Button, ModalWindow, ModalBlocker, ModalFooter, ModalHeader, LabeledInput, IconButton, ButtonColor, IconButtonProps,
} from './components';
import {
    DatePicker, RangeDatePicker, Checkbox, FlexCell, Spinner,
} from '@epam/uui';

const buttonTypeToColor: { [key: string]: ButtonColor } = {
    success: 'green',
    cancel: 'gray50',
    action: 'blue',
};

const mapIconButtonProp = (props: SkinContextComponentProps<ButtonCoreProps>): IconButtonProps => {
    const resultProps: IconButtonProps = {
        ...props,
        color: 'gray60',
    };

    if (props.usageContext.includes('RTE-Sidebar')) {
        resultProps.color = 'gray30';
    }

    return resultProps;
};

export const skinContext: ISkin = {
    TextInput: skinComponent(TextInput),
    Spinner: skinComponent(Spinner),
    FlexRow: skinComponent(FlexRow, (props) => ({ spacing: null, ...props })),
    FlexCell: skinComponent(FlexCell),
    Button: skinComponent(Button, (props) => ({ color: buttonTypeToColor[props.type], ...props })),
    IconButton: skinComponent(IconButton, mapIconButtonProp),
    Checkbox: skinComponent(Checkbox),
    ModalWindow: skinComponent(ModalWindow),
    ModalBlocker: skinComponent(ModalBlocker, (props) => ({ blockerShadow: 'dark' as const, ...props })),
    ModalFooter: skinComponent(ModalFooter),
    ModalHeader: skinComponent(ModalHeader, (props) => ({ borderBottom: true as const, ...props })),
    LabeledInput: skinComponent(LabeledInput, (props) => ({ size: '36' as const, ...props })),
    DatePicker: skinComponent(DatePicker),
    RangeDatePicker: skinComponent(RangeDatePicker),
};
