import React from 'react';
import ContactForm from '../../components/ContactForm';

const Home = () => {
  const submit = values => {
    // print the form values to the console
    console.log(values);
  };
  return (
    <div>
      <div>Home</div>
      <ContactForm onSubmit={submit} />
    </div>
  );
};

export default Home;
