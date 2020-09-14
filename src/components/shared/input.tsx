import React, { FC } from 'react';
import { Field, ErrorMessage } from 'formik';


interface Props {
  name: string;
  label: string;
  type?: 'text' | 'email';
  textarea?: boolean;
  cols?: number;
  rows?: number;
  required?: boolean;
  errorText?: string;
}

const Input: FC<Props> = ({
  label, name, type = 'text', textarea = false,
  cols = 50, rows = 15, required = false, errorText
}) => {

  const element = textarea ? (
    <Field 
      id={name}
      name={name}
      component="textarea"
      rows={rows}
      cols={cols}
    />
  ) : (
    <Field
      id={name}
      name={name}
      type={type}
    />
  );

  return (
    <div className={`${errorText && 'invalid'}`}>
      <label htmlFor={name}>{label}{' '}
        {required && <span className="required">*</span>}
      </label>
      {element}
      <ErrorMessage name={name} component="p" />
    </div>
  )
}

export default Input;