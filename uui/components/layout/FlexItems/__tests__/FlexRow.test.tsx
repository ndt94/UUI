import React from 'react';
import { FlexRow } from '../FlexRow';
import { renderer } from '@epam/uui-test-utils';

describe('FlexRow', () => {
    it('should be rendered correctly', () => {
        const tree = renderer.create(<FlexRow />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should be rendered correctly with props', () => {
        const tree = renderer
            .create(<FlexRow onClick={ () => {} } margin="12" size="24" spacing="12" padding="12" borderBottom alignItems="top" topShadow vPadding="12" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
