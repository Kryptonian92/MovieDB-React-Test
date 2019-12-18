import React from 'react';

import { 
    render, cleanup, fireEvent, getByText, getByLabelText, debug
} from 'react-testing-library';
import MovieForm from './Movieform';

//unmounts everything from the dom after each test
afterEach(cleanup);

const onSubmitMock = jest.fn();
test('<MovieForm>', () => {
    const { queryByTestId, getByText, debug, getByLabelText } = render(<MovieForm submitForm = { onSubmitMock }/>);
    
    expect(queryByTestId('movie-form')).toBeTruthy();

    getByLabelText('Text').value = 'hello';
    fireEvent.change(getByLabelText('Text'), {
        target: {value: 'hello'},
    });

    fireEvent.click(getByText('Submit'));
    debug()

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    
    // pulling text from this.state and passing it into submit form
    expect(onSubmitMock).toHaveBeenCalledWith({
        text: 'hello',
    })

});