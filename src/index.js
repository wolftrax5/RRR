import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
