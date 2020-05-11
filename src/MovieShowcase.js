import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {




  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX

    // implicit return because no curly braces
    // {...factor} condenses props
   return movieData.map((singleMovie, index) => <MovieCard
      key={index}
      title={singleMovie.title}
      IMDBRating={singleMovie.IMDBRating}
      genres={singleMovie.genres}
      poster={singleMovie.poster}
    />)
    
  }

  render() {
    
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
