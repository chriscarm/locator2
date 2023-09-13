
import React from 'react';
import renderer from 'react-test-renderer';
import ShareLocationScreen from '../src/screens/ShareLocationScreen';

describe('ShareLocationScreen', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<ShareLocationScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
