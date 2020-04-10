import React from 'react';
import { render } from 'test-utils';
import App from '../app.jsx';

it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
    
    expect(asFragment(<App />)).toMatchSnapshot()
});
