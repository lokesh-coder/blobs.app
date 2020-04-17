import React from 'react';
import { render } from 'test-utils';
import  Loader from 'uielements/loader/loader.component.jsx';

it('should take a snapshot', () => {
    const { asFragment } = render(<Loader />)
    
    expect(asFragment(<Loader />)).toMatchSnapshot()
});
