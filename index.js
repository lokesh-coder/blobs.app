import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
const App = React.lazy(() => import('./src/app.jsx'));

ReactDOM.render(<Suspense fallback={<p>Loading...</p>}><App /></Suspense>, document.getElementById('root'));
