import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Counter from './Counter';

//wrapper.debug() to show what the dom is rendering
test('<Counter />', () =>{
    // alternate render method - const wrapper = render(<Counter />);
    const {debug, getByTestId} = render(<Counter />);
    // debug();

    // asserts counter-button is a button
    expect(getByTestId('counter-button').tagName).toBe('BUTTON')

    // asserts counter-button starts at 0
    expect(getByTestId('counter-button').textContent).toBe('0')
});