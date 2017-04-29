/*
  * Npm import
  */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component
 */
const PhoneNumber = ({ phone }) => {
  let formattedPhone;
  if (phone.length === 10) {
    const p = phone;
    formattedPhone = `${p[0] + p[1]} ${p[2] + p[3]} ${p[4] + p[5]} ${p[6] + p[7]} ${p[8] + p[9]}`;
  }
  else {
    /* eslint-disable no-console */
    console.error('phone isn\'t a string with 10 character. Aborting formatting (in PhoneNumber component)');
    /* eslint-enable no-console */
    formattedPhone = phone;
  }

  return (
    <span className="formatted-phone">
      {formattedPhone}
    </span>
  );
};

PhoneNumber.propTypes = {
  phone: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default PhoneNumber;
