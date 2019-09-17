import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

/*store configuration*/
import configureStore from './store/setup';

/*entry point*/
import App from './components/App';

/*show loader untill web socket connection is established*/
import Loader from './components/Loader';
ReactDOM.render(<Loader/>,document.getElementById('root'));

/*render root app */
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
