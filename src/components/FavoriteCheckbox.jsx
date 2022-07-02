import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/FavoriteCheckbox.css';
import heartOutline from '../images/heart-outline.svg';
import heart from '../images/heart.svg';
import getMusics from '../services/musicsAPI';
import { addSong } from '../services/favoriteSongsAPI';

export default class FavoriteCheckbox extends Component {
  state = {
    src: heartOutline,
    loading: false,
    isChecked: false,
  }

  componentDidMount() {
    this.isMount = true;
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  handleClick = () => {
    this.setState({
      loading: true,
    }, async () => {
      if (this.isMount) {
        const { src } = this.state;
        const { trackId } = this.props;
        const musicObj = await getMusics(trackId);
        await addSong(musicObj[0]);
        const newSrc = src === heartOutline ? heart : heartOutline;
        this.setState({
          src: newSrc,
          isChecked: true,
          loading: false,
        });
      }
    });
  }

  render() {
    const { src, loading, isChecked } = this.state;
    const { trackId } = this.props;
    if (loading) return ('Carregando...');
    return (
      <label
        htmlFor={ trackId }
        data-testid={ `checkbox-music-${trackId}` }
      >
        <input
          type="checkbox"
          id={ trackId }
          onChange={ this.handleClick }
          checked={ isChecked }
        />
        <img src={ src } alt="favicon" className="label" />
      </label>

    );
  }
}

FavoriteCheckbox.propTypes = {
  trackId: PropTypes.number.isRequired,
};
