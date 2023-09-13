
import React from 'react';
import renderer from 'react-test-renderer';
import FriendRequestScreen from '../src/screens/FriendRequestScreen';

describe('FriendRequestScreen', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<FriendRequestScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
