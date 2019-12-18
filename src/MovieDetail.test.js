import React from 'react';
import { render, cleanup, fireEvent, getByText } from 'react-testing-library';
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

test('<Movie />', () => {
    fetch.mockResponseOnce(JSON.stringify({
        movie:{
            id: 'hi',
            title: "Level up rules!"
        }
    }))
    const { debug } = render(<MovieDetail match={match}/>);
    debug();
})