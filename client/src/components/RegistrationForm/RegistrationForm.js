import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Error from '../Error/Error';
import { authActionRegister, clearAuth } from '../../actions/actionCreator';
import styles from './RegistrationForm.module.sass';
import FormInput from '../FormInput/FormInput';
import RoleInput from '../RoleInput/RoleInput';
import AgreeTermOfServiceInput
  from '../AgreeTermOfServiceInput/AgreeTermOfServiceInput';
import CONSTANTS from '../../constants';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';


class RegistrationForm extends React.Component {
  componentWillUnmount() {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    this.props.authClear();
  }

  event = (values) => {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    this.props.register({ values });
  };

  render() {
    const {
      // eslint-disable-next-line react/prop-types
      handleSubmit, submitting, auth, authClear,
    } = this.props;
    const { error } = auth;
    const formInputClasses = {
      container: styles.inputContainer,
      input: styles.input,
      warning: styles.fieldWarning,
      notValid: styles.notValid,
      valid: styles.valid,
    };
    return (
      <div className={styles.signUpFormContainer}>
        { error && (
        <Error
          data={error.data}
          status={error.status}
          clearError={authClear}
        />
        ) }
        <div className={styles.headerFormContainer}>
          <h2>
            CREATE AN ACCOUNT
          </h2>
          <h4>
            We always keep your name and email address private.
          </h4>
        </div>
        <form onSubmit={handleSubmit(this.event)}>
          <div className={styles.row}>
            <Field
              name="firstName"
              classes={formInputClasses}
              component={FormInput}
              type="text"
              label="First name"
            />
            <Field
              name="lastName"
              classes={formInputClasses}
              component={FormInput}
              type="text"
              label="Last name"
            />
          </div>
          <div className={styles.row}>
            <Field
              name="displayName"
              classes={formInputClasses}
              component={FormInput}
              type="text"
              label="Display Name"
            />
            <Field
              name="email"
              classes={formInputClasses}
              component={FormInput}
              type="text"
              label="Email Address"
            />
          </div>
          <div className={styles.row}>
            <Field
              name="password"
              classes={formInputClasses}
              component={FormInput}
              type="password"
              label="Password"
            />
            <Field
              name="confirmPassword"
              classes={formInputClasses}
              component={FormInput}
              type="password"
              label="Password confirmation"
            />
          </div>
          <div className={styles.choseRoleContainer}>
            <Field
              name="role"
              type="radio"
              value={CONSTANTS.CUSTOMER}
              strRole="Join As a Buyer"
              infoRole="I am looking for a Name, Logo or Tagline for my business, brand or product."
              component={RoleInput}
              id={CONSTANTS.CUSTOMER}
            />
            <Field
              name="role"
              type="radio"
              value={CONSTANTS.CREATOR}
              strRole="Join As a Creative"
              infoRole="I plan to submit name ideas, Logo designs or sell names in Domain Marketplace."
              component={RoleInput}
              id={CONSTANTS.CREATOR}
            />
          </div>
          <div className={styles.termsOfService}>
            <Field
              name="agreeOfTerms"
              classes={{
                container: styles.termsOfService,
                warning: styles.fieldWarning,
              }}
              id="termsOfService"
              component={AgreeTermOfServiceInput}
              type="checkbox"
            />

          </div>
          <button
            type="submit"
            disabled={submitting}
            className={styles.submitContainer}
          >
            <span className={styles.inscription}>Create Account</span>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  initialValues: {
    role: CONSTANTS.CUSTOMER,
  },
});

const mapDispatchToProps = (dispatch) => (
  {
    register: (data) => dispatch(authActionRegister(data)),
    authClear: () => dispatch(clearAuth()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'login',
  validate: customValidator(Schems.RegistrationSchem),
})(RegistrationForm));
