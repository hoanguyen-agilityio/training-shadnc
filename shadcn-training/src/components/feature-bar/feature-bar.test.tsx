// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import { FeatureBar } from '.';

describe('FeatureBar component', () => {
  test('Renders featureBar component', () => {
    const { container } = render(<FeatureBar />);
    expect(container).toMatchSnapshot();
  });
});
