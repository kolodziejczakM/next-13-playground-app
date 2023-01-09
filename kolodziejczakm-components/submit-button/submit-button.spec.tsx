import React from 'react';
import { render } from '@testing-library/react';
import { BasicSubmitButton } from './submit-button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSubmitButton />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
