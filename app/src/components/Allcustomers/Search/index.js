/**
 * npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component
 */
const Search = ({ value, onInputChange }) => (
  <form id="search">
    <input
      id="search__input"
      placeholder="Rechercher..."
      value={value}
      onChange={onInputChange}
    />
  </form>
);

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

/**
 * export
 */
export default Search;
