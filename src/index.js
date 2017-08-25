import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Body from './Body';
import registerServiceWorker from './registerServiceWorker';

import logo from './logo.svg'

ReactDOM.render(<App logo={logo}><Body /></App>, document.getElementById('root'));
registerServiceWorker();
