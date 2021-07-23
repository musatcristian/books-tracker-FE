import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { App } from '@App';

describe('App test suite', () => {
  test('App renders', () => {
    const { getByText } = render(<App />);

    expect(
      getByText('Main content', {
        exact: false,
      })
    ).toBeInTheDocument();
  });
});
