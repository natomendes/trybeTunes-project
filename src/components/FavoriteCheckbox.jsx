import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/FavoriteCheckbox.css';
import heartOutline from '../images/heart-outline.svg';
import heart from '../images/heart.svg';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

export default class FavoriteCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.checked ? heart : heartOutline,
      loading: false,
      isChecked: props.checked,
    };
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
        const { src, isChecked } = this.state;
        const { trackId, trackName, previewUrl, updateFavSongs } = this.props;
        const musicObj = {
          trackId,
          trackName,
          previewUrl,
        };
        console.log(musicObj);
        if (isChecked) {
          await removeSong(musicObj);
        } else {
          await addSong(musicObj);
        }
        updateFavSongs();

        const newSrc = src === heartOutline ? heart : heartOutline;
        this.setState(({ isChecked: prevChecked }) => ({
          src: newSrc,
          isChecked: !prevChecked,
          loading: false,
        }));
      }
    });
  }

  render() {
    const { src, loading, isChecked } = this.state;
    const { trackId } = this.props;
    if (loading) return (<Loading width="24px" />);
    return (
      <label
        htmlFor={ trackId }
      >
        <input
          data-testid={ `checkbox-music-${trackId}` }
          type="checkbox"
          id={ trackId }
          onChange={ this.handleClick }
          checked={ isChecked }
        />
        <img src={ src } alt="favicon" />
        <span className="labelText">Favorita</span>
      </label>

    );
  }
}

FavoriteCheckbox.propTypes = {
  trackId: PropTypes.number.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  updateFavSongs: PropTypes.func,
};

FavoriteCheckbox.defaultProps = {
  updateFavSongs: undefined,
};
