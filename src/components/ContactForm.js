import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './ContactForm.css';

let ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div className="field-group">
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div className="field-group">
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact',
})(ContactForm);

export default ContactForm;
