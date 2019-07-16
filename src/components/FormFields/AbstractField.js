import React from 'react';
import { PropTypes } from 'utils';

const AbstractField = ({ Component, input }) => <Component {...input} />;

AbstractField.propTypes = {
  Component: PropTypes.node.isRequired,
  input: PropTypes.object.isRequired,
};

export default AbstractField;
