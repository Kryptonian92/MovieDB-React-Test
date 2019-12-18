import React from 'react';
import { render, cleanup, fireEvent, getByText } from 'react-testing-library';
import { MemoryRouter} from 'react-router-dom';
import Movie from './Movie';

//unmounts everything from the dom after each test
//mockCkear() which resets the mock after each rest function
afterEach(()=>{
    cleanup();
    console.error.mockClear();
});

//mocking error
console.error = jest.fn();

test('<Movie />', () => {
    render(<Movie />);
    expect(console.error).toHaveBeenCalled();
})

const movie = {
    id: "hi",
    title: "Level Up Big Day Out",
    poster_path: "jasdf.jpg"
}
test('<Movie /> with movie', () => {
    render(
        <MemoryRouter>
            <Movie movie={movie}/>
        </MemoryRouter>
    );
    expect(console.error).not.toHaveBeenCalledTimes(1);
})