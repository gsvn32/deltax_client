import React from 'react';

import axios from 'axios';

export default class MovieList extends React.Component {
  state = {
    Movies: []
  }



  componentDidMount() {
    axios.get(`http://localhost:3000/api/movie`)
      .then(res => {
        console.log(res.data.confirmation);
        const Movies = res.data.Movies;

        this.setState({ Movies });
      })
  }

  render() {
    return (
      <div>{
          this.state.Movies.map(movie =>

            <a href="spec.html"><img src={movie.poster} /></a>

    )}
      </div>
    )
  }
}
