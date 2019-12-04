/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../../services/api';
import SearchBar from '../../components/SearchBar/SearchBar';

class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
    match: PropTypes.shape({}).isRequired,
  };

  state = {
    shows: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get('search');
    if (!currentSearch) {
      return;
    }
    this.fetchFilms(currentSearch);
  }

  componentDidUpdate(prevProps) {
    const prevSearch = new URLSearchParams(prevProps.location.search).get(
      'search',
    );
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get('search');

    if (prevSearch === currentSearch) {
      return;
    }
    this.fetchFilms(currentSearch);
  }

  fetchFilms = q => {
    API.searchShows(q).then(res => this.setState({ shows: res.data.results }));
  };

  onSearchSubmit = query => {
    const { history, location } = this.props;
    history.push({
      ...location,
      search: `?search=${query}`,
    });
  };

  render() {
    const { shows } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ul>
          {shows.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default MoviesPage;
