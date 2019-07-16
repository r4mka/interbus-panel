import React from 'react';
import AbstractField from './AbstractField';

const Input = props => <input type="text" {...props} />;

const TextField = props => <AbstractField {...props} Component={Input} />;

export default TextField;
