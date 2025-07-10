// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { Dropdown } from '..';

// Mocks
import { SORT_OPTIONS } from '@/mocks';

describe('Dropdown component', () => {
  test('Renders dropdown component', () => {
    const { container } = render(
      <Dropdown label="Sort by" defaultValue="defaultValue" options={SORT_OPTIONS} />,
    );
    expect(container).toMatchSnapshot();
  });
});
