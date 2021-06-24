import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Navbar } from '@Components/navbar';

test('renders navbar', () => {
  const { getByText } = render(<Navbar />);

  expect(
    getByText('theme', {
      exact: false,
    })
  ).toBeInTheDocument();
});
