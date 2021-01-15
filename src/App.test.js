import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import ContactForm from './components/ContactForm'

test('renders app without errors', ()=> {
  render(<App />)
})

//not done yet ^

test('if a name over 20 characters is entered, an error appears', async () => {
  // arrange
  render(<ContactForm />)

  const fnameField = screen.getByLabelText(/first name/i);
  const lnameField = screen.getByLabelText(/last name/i);
  const emailField = screen.getByLabelText(/email/i);
  const submitButton = screen.getByTitle("submit")
  userEvent.type(fnameField, "alexandertonsmithinhiii");
  userEvent.type(lnameField, "murphy");
  userEvent.type(emailField, "alex@ande.com");
  userEvent.click(submitButton)

  
const error = await screen.findByTitle("error");

expect(error).toBeInTheDocument();
  

});

test('if the form is filled out correctly, it can be submitted properly and results are shown', async () => {

  render(<ContactForm />)

  const fnameField = screen.getByLabelText(/first name/i);
  const lnameField = screen.getByLabelText(/last name/i);
  const emailField = screen.getByLabelText(/email/i);
  const submitButton = screen.getByTitle("submit")
  userEvent.type(fnameField, "al");
  userEvent.type(lnameField, "murphy");
  userEvent.type(emailField, "alex@ande.com");
  userEvent.click(submitButton)

const results = await screen.findByTitle("results");

expect(results).toBeInTheDocument();


})