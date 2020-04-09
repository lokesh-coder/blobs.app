import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../app.jsx';

it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
    
    expect(asFragment(<App />)).toMatchSnapshot()
});
