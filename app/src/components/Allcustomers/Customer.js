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
const Customer = ({ profile }) => (
  <div className="customer">
    <div className="customer-name">
      Nom complet :
      {profile.last_name}
      {profile.first_name}
    </div>
    <div className="customer-age">
      Age : {profile.age} ans
    </div>
  </div>
);
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
