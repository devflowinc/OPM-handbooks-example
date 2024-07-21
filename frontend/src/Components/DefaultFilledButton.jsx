import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

DefaultFilledButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default function DefaultFilledButton({ text, link }) {
  return (
    <Link to={link}>
      <button
        type="button"
        className="mb-2 rounded-lg bg-primary bg-opacity-10 px-5 py-2.5 text-sm font-medium text-primary hover:bg-opacity-90 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-light dark:bg-primary dark:hover:bg-primary-dark dark:focus:ring-primary-dark"
      >
        {text}
      </button>
    </Link>
  );
}
