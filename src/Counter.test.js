import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Counter from './Counter';

//unmounts everything from the dom after each test
afterEach(cleanup);

test('<Counter />', () =>{
    // alternate render method - const wrapper = render(<Counter />);
    const {debug, getByTestId} = render(<Counter />);
    const counterButton = getByTestId('counter-button');
    // debug();

    // asserts counter-button is a button
    expect((counterButton).tagName).toBe('BUTTON')

    // asserts counter-button starts at 0
    expect((counterButton).textContent).toBe('0')

    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('1');

    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('2')

});