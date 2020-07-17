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

test("Test if we can change input values", () => {
  const {getByLabelText} = render(<ContactForm />)

  const firstNameInput = getByLabelText(/First Name/)
  fireEvent.change(firstNameInput, {target: {value: 'Danielle'}});
  expect(firstNameInput.value).toBe('Danielle');

  const lastNameInput = getByLabelText(/Last Name/i)
  fireEvent.change(lastNameInput, {target: {value: 'Mathey'}});
  expect(lastNameInput.value).toBe('Mathey');

  const emailInput = getByLabelText(/Email/i)
  fireEvent.change(emailInput, {target: {value: "email@test.com"}});
  expect(emailInput.value).toBe('email@test.com');

})

test("See if the submit button works", () => {
  const {getByTestId} = render(<ContactForm />)
  
  const submitButton = getByTestId('test');
  fireEvent.click(submitButton);
})