import React from 'react';
import { render, cleanup, fireEvent, getByText } from 'react-testing-library';
import MovieForm from './Movieform';

//unmounts everything from the dom after each test
afterEach(cleanup);

const onSubmit = jest.fn();
test('<MovieForm>', () => {
    const { queryByTestId, getByText } = render(<MovieForm submitForm = { onSubmit }/>);
    expect(queryByTestId('movie-form')).toBeTruthy();

    fireEvent.click(getByText('Submit'));

    expect(onSubmit).toHaveBeenCalledTimes(1);

});