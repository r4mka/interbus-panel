import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import { map, upperFirst } from 'lodash';
import { PropTypes } from 'utils';
import * as FormFields from 'components/FormFields';
import * as validators from 'redux-form-validators';

const FormField = ({ meta: { touched, error }, type, ...props }) => {
  const Component = FormFields[upperFirst(type)];

  return <Component {...props} error={touched && error} />;
};

FormField.propTypes = {
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

const Form = ({
  fields,
  handleSubmit,
  onSubmit,
  pristine,
  reset,
  resetLabel,
  submitting,
  submitLabel,
}) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    {map(fields, ({ type, name, validate = [], ...props }) => (
      <Field
        name={name}
        type={type}
        validate={validate.map(v => validators[v]())}
        component={FormField}
        {...props}
      />
    ))}
    {resetLabel && (
      <button type="button" onClick={reset} disabled={pristine}>
        {resetLabel}
      </button>
    )}
    <button type="submit" disabled={submitting || pristine}>
      {submitLabel}
    </button>
  </form>
);

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  submitLabel: PropTypes.string.isRequired,
  resetLabel: PropTypes.string,
};

Form.defaultProps = {
  resetLabel: '',
};

export default reduxForm({})(Form);
