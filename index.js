import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader from './src/components/loader/loader.component.jsx';
const App = React.lazy(() => import('./src/app.jsx'));

ReactDOM.render(<Suspense fallback={<Loader />}><App /></Suspense>, document.getElementById('root'));
