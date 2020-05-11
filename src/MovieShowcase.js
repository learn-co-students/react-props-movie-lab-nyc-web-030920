import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    //iterate through movieData
    //for each, create a component 
    return movieData.map(movieObject => { 
      return <MovieCard key={movieObject.id} movie={movieObject}/> //each component should have its own key so that React can understand the difference between components
    })  // passing down properties of movie object 
        //into a created MovieCard component 
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}