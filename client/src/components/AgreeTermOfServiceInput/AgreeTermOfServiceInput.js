import React from 'react';

const AgreeTermOfServiceInput = ({
// eslint-disable-next-line react/prop-types
  label, id, input, type, classes, meta: { touched, error },
}) => (
  <div>
    {/* eslint-disable-next-line react/prop-types */}
    <div className={classes.container}>
      <input {...input} placeholder={label} id={id} type={type} />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={id}>
        By clicking this checkbox, you agree to our
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service.
        </a>
      </label>
    </div>
    {/* eslint-disable-next-line react/prop-types */}
    {touched && (error && <span className={classes.warning}>{error}</span>)}
  </div>

);

export default AgreeTermOfServiceInput;
