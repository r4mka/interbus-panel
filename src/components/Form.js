import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import { map, upperFirst } from 'lodash';
import { PropTypes } from 'utils';
import * as FormFields from 'components/FormFields';
import * as validators from 'redux-form-validators';
import { Button, Form as AntdForm } from 'antd';
import i18n from 'i18n';

const FormField = ({ type, ...props }) => {
  const Component = FormFields[upperFirst(type)];

  return <Component {...props} />;
};

FormField.propTypes = {
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

const Form = ({ fields, handleSubmit, pristine, reset, cancelLabel, submitting, submitLabel }) => (
  <AntdForm layout="horizontal" onSubmit={handleSubmit}>
    {map(fields, ({ type, name, validate = [], ...props }) => (
      <Field
        name={name}
        type={type}
        validate={validate.map(v => validators[v]())}
        component={FormField}
        {...props}
      />
    ))}
    <div style={{ textAlign: 'right' }}>
      {cancelLabel && (
        <Button htmlType="button" onClick={reset} disabled={pristine} style={{ marginRight: 8 }}>
          {cancelLabel}
        </Button>
      )}
      <Button htmlType="submit" type="primary" disabled={submitting || pristine}>
        {submitLabel}
      </Button>
    </div>
  </AntdForm>
);

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  cancelLabel: PropTypes.string,
  submitLabel: PropTypes.string,
};

Form.defaultProps = {
  cancelLabel: i18n.t('button.cancel'),
  submitLabel: i18n.t('button.submit'),
};

export default reduxForm({})(Form);
