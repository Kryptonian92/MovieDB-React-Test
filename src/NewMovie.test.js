import React from 'react';
import { render, cleanup, fireEvent, getByText } from 'react-testing-library';
import NewMovie from './NewMovie';

//unmounts everything from the dom after each test
afterEach(cleanup);

test('<NewMovie>', () => {
    const { debug, getByTestId, queryByTestId, container } = render(<NewMovie />);
    // debug();

    //getByTestId renders the component then grabs it by the "page-title" data-testid
    expect(getByTestId("page-title").textContent).toBe('New Movie')
    
    //searching to see if that id exists
    expect(queryByTestId('movie-form')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();

});