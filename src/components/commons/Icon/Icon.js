import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  name,
  clickButton,
}) => {
    switch(name) {
      case "down": return(
        <div className="arrow" id="btn1" onClick={clickButton}>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
    );
    case "up": return(
      <div className="arrow" id="btn2" onClick={clickButton}>
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </div>
      ); 
      default:
        return '';
    }
}


Icon.propTypes = {
  name: PropTypes.string,
  clickButton: PropTypes.func,
};

Icon.defaultProps = {
  name: '',
  clickButton: null,
};

export default Icon;
