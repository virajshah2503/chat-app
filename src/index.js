import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/setup';
import App from './components/App';

import Loader from './components/Loader';
ReactDOM.render(<Loader/>,document.getElementById('root'));

configureStore().then((store) => {
		return ReactDOM.render(
		    <Provider store={store} >
		    	<App/>
		    </Provider>
		    ,
		    document.getElementById('root')
		)
	}
);

serviceWorker.unregister();
