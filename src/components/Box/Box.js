import React from 'react';
import PropTypes from 'prop-types';

const Box = ({
  artist,
  endDate,
  startDate,
  songTitle,
  youtubeId,
}) => {
    return(
      <div>
        <div className="title">{songTitle}</div>
        <div className="info">
          <iframe width="560" height="315" title={youtubeId} src={`https://www.youtube.com/embed/${youtubeId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="name">- {artist} -</div>
        <div className="time">
            <span>{startDate}</span>
            <span>{endDate}</span>
        </div>
      </div>
    );
}


Box.propTypes = {
  artist: PropTypes.string,
  endDate: PropTypes.string,
  startDate: PropTypes.string,
  songTitle: PropTypes.string,
  youtubeId: PropTypes.string,
};

Box.defaultProps = {
  artist: '',
  endDate: '',
  startDate: '',
  songTitle: '',
  youtubeId: '',
};

export default Box;
