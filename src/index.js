import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/setup';
import App from './components/App';


configureStore().then((store) =>
   ReactDOM.render(
      <Provider store={store} >
        <App/>
      </Provider>
      ,
      document.getElementById('root')
   )
);

serviceWorker.unregister();
