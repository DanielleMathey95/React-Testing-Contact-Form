import React from 'react';
import ContactForm from './ContactForm';
import {render, fireEvent} from '@testing-library/react';

test("See if the app is working", () => {
  render(<ContactForm />)
})