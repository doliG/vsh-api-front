/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */


/*
 * Code
 */
const Header = ({ routes, handleView }) => (
  <div id="header">
    {routes.map(route => (
      <a
        key={route.name}
        onClick={handleView(route.view)}
      >
        {route.name}
      </a>
    ))}
  </div>
);
Header.propTypes = {
  routes: PropTypes.array.isRequired,
  handleView: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Header;
