import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Counter from './exercise_4.js'

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
