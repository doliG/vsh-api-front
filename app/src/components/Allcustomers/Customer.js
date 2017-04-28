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
const Customer = ({ profile }) => {
  const { first_name, last_name, age } = profile;

  /* eslint-disable camelcase */
  return (
    <div className="customer">
      <div className="customer__name">
        {`${first_name} ${last_name}`}
      </div>
      <div className="customer__age">
        {age} ans
      </div>
    </div>
  );
  /* eslint-enable camelcase */
};

Customer.propTypes = {
  profile: PropTypes.shape({
    last_name: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

/**
 * Export
 */
export default Customer;
