import React from 'react';
import ContactForm from './ContactForm';
import {render, fireEvent} from '@testing-library/react';

test("See if the app is working", () => {
  render(<ContactForm />)
})

test("Testing the form inputs", () => {
  const {getByLabelText, getByText} = render(<ContactForm />)

  const firstNameInput = getByLabelText(/First Name/i);
  const lastNameInput = getByLabelText(/Last Name/i);
  const emailInput = getByText(/email/i);
})