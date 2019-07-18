import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import { map, upperFirst } from 'lodash';
import { PropTypes } from 'utils';
import * as FormFields from 'components/FormFields';
import * as validators from 'redux-form-validators';
import { Button } from 'antd';

const FormField = ({ meta: { touched, error }, type, ...props }) => {
  const Component = FormFields[upperFirst(type)];

  return <Component {...props} error={touched && error} />;
};

FormField.propTypes = {
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

const Form = ({ fields, handleSubmit, pristine, reset, resetLabel, submitting, submitLabel }) => (
  <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
    {map(fields, ({ type, name, validate = [], ...props }) => (
      <div key={name} style={{ margin: 8 }}>
        <Field
          name={name}
          type={type}
          validate={validate.map(v => validators[v]())}
          component={FormField}
          {...props}
        />
      </div>
    ))}
    <div style={{ margin: 8, textAlign: 'right' }}>
      {resetLabel && (
        <Button htmlType="button" onClick={reset} disabled={pristine} style={{ marginRight: 8 }}>
          {resetLabel}
        </Button>
      )}
      <Button htmlType="submit" type="primary" disabled={submitting || pristine}>
        {submitLabel}
      </Button>
    </div>
  </form>
);

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
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
