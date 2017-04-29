/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/*
 * Local import
 */


/*
 * Code
 */
const Header = ({ routes, handleView, view }) => (
  <div id="header">
    {routes.map(route => (
      <a
        key={route.name}
        onClick={handleView(route.view)}
        className={classNames({ active: route.view === view })}
      >
        {route.name}
      </a>
    ))}
  </div>
);
Header.propTypes = {
  routes: PropTypes.array.isRequired,
  handleView: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Header;
