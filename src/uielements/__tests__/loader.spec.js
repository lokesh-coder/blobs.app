import React from 'react';
import { render } from 'test-utils';
import  Loader from '../loader/loader.component.jsx';

it('should take a snapshot', () => {
    const { asFragment } = render(<Loader />)
    
    expect(asFragment(<Loader />)).toMatchSnapshot()
});
