import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import movies from './reducers/movies';
import './index.css';

const store = createStore(movies);

ReactDOM.render(<App store={store} />, document.getElementById('root'));