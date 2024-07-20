import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <Button key={option} action={() => onLeaveFeedback(option)}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </Button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
