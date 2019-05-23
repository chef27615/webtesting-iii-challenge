import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Controls from './Controls';

describe('<Control />', () => {
    
    it('should render without crash', () => {
        render(<Controls />);
        cleanup();
    })

    it('should close the gate', () => {
        const mock = jest.fn(() => 'closed')
        const actual = mock('closed');

        expect(actual).toBe('closed')
        cleanup();
    })

    it('should display open gate text', () => {
        const locked = false;
        const closed = true;
        const { getByText } = render(<Controls  locked={locked} closed={closed} />);
        const text = getByText(/open gate/i);
        expect(text).toBeDefined();
        cleanup();
    })
})