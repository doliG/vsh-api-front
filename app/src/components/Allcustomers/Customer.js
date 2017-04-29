/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import PhoneNumber from './PhoneNumber';

/*
 * Code
 */
const Customer = ({ profile }) => {
  const {
    first_name,
    last_name,
    // age,
    phone,
    address,
    city,
    post_code,
  } = profile;

  /* eslint-disable camelcase */
  return (
    <div className="customer">
      <div className="customer__name">
        {`${first_name} ${last_name}`}
      </div>
      <div className="customer__city">
        {city}
      </div>
      <hr />
      <div className="customer__phone">
        <PhoneNumber phone={phone} />
      </div>
      <div className="customer__address">
        <div className="customer__address__base">
          {address}
        </div>
        <div className="customer__address__city">
          {`${post_code} ${city}`}
        </div>
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
