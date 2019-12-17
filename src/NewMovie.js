import React, { Component } from 'react'
import MovieForm from './Movieform';

export default class NewMovie extends Component {
    render() {
        return (
            <div>
                <h1 data-testid="page-title">New Movie</h1>
                <MovieForm />
            </div>
        )
    }
}
