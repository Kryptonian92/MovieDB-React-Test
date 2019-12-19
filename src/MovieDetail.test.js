import React from 'react';
import { render, cleanup, waitForElement, wait } from 'react-testing-library';
import { MemoryRouter} from 'react-router-dom';
import MovieDetail from './MovieDetail';

global.fetch = require('jest-fetch-mock');

//unmounts everything from the dom after each test
//mockCkear() which resets the mock after each rest function
afterEach(()=>{
    cleanup();
    console.error.mockClear();
});

const match={
    params: {
        id: 'lkjaslkdjf',
    }
}

//mocking error
console.error = jest.fn();

const movie = {
    id: 'hi',
    title: "Level Up Rules!"  
};

//mocked async fetch
test('<MovieDetail />', async () => {
    fetch.mockResponseOnce(
        JSON.stringify(movie)
);
    //debug by adding debug to render and running debug()
    const {getByTestId } = render(<MovieDetail match={match}/>);
    await waitForElement(() => getByTestId('movie-title'));

    expect(getByTestId('movie-title').textContent).toBe(movie.title)
})