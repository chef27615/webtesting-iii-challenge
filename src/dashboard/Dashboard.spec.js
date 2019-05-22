import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    
    it('should render without crash', () => {
        render(<Dashboard />)
        cleanup();
    })

    it('should match a snapshot', () => {
        const tree = renderer.create(<Dashboard />);
        expect(tree.toJSON()).toMatchSnapshot();
        cleanup()
    })

    it('should control a mocked toggle',  () => {
       const toggle = jest.fn(() => true);
       toggle();
       expect(toggle).toBeCalled()
    })
    

})
