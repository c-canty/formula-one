import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store'; // Importing the `store` named export from './store'
import { BrowserRouter } from 'react-router-dom'



const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>);
