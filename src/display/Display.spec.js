import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Display from './Display';

const receivedData = {
    closed: true,
    locked: false
}

describe('<Display />', () => {
    it('should render', () => {
        render(<Display />);
        cleanup()
    })

    it('should received closed as props', () => {
        const { closed } = receivedData;
        const { getByText } = render(<Display closed={closed} />)
        const text = getByText(/closed/i);
        expect(text).toBeTruthy()
        cleanup()
    })
    
    it('should received locked as props', () => {
        const { locked } = receivedData;
        const { getByText } = render(<Display locked={locked} />)
        const text = getByText(/locked/i);
        expect(text).toBeTruthy()
        cleanup()
    })

})