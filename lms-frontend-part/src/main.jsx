import './index.css';
//import for library 
import ReactDom from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import App from './App.jsx';
import store from './Redux/store';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Provider>

);
