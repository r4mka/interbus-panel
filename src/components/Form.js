import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import { map, upperFirst } from 'lodash';
import { PropTypes } from 'utils';
import * as FormFields from 'components/FormFields';
import * as validators from 'redux-form-validators';
import { Button, Form as AntdForm } from 'antd';
import i18n from 'i18n';
import { useTranslation } from 'react-i18next';

const FormField = ({ type, ...props }) => {
  const Component = FormFields[upperFirst(type)];

  return <Component {...props} />;
};

FormField.propTypes = {
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

const Form = ({
  fields,
  handleSubmit,
  pristine,
  reset,
  submitting,
  cancelLabel,
  labelCol,
  submitLabel,
  wrapperCol,
}) => {
  const { t } = useTranslation();

  return (
    <AntdForm
      layout="horizontal"
      onSubmit={handleSubmit}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
    >
      {map(fields, ({ type, name, validate = [], ...props }) => (
        <Field
          name={name}
          type={type}
          validate={validate.map(v =>
            typeof v === 'string'
              ? validators[v]({ message: t(`validators.${v}`, 'validators.default') })
              : validators[v.name]({
                  message: t(`validators.${v.name}`, 'validators.default'),
                  ...v.options,
                }),
          )}
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
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  cancelLabel: PropTypes.string,
  labelCol: PropTypes.object,
  submitLabel: PropTypes.string,
  wrapperCol: PropTypes.object,
};

Form.defaultProps = {
  cancelLabel: i18n.t('button.cancel'),
  labelCol: { span: 10 },
  submitLabel: i18n.t('button.submit'),
  wrapperCol: { span: 14 },
};

export default reduxForm({})(Form);
