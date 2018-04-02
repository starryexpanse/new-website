import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ScrollProvider } from './ScrollProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ScrollProvider><App /></ScrollProvider>, document.getElementById('root'));
registerServiceWorker();
