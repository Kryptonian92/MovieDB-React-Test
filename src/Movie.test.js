import React from 'react';
import { render, cleanup, fireEvent, getByText } from 'react-testing-library';
import { MemoryRouter} from 'react-router-dom';
import Movie, {POSTER_PATH} from './Movie';

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
    const { debug, getByTestId} = render(
        <MemoryRouter>
            <Movie movie={movie}/>
        </MemoryRouter>,
    );
    expect(console.error).not.toHaveBeenCalled();

    //(`/${movie.id}`) or ("/" + "movie.id")
    expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`);
    expect(getByTestId('movie-img').src).toBe(`${POSTER_PATH}${movie.poster_path}`);
})