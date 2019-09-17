import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { chatMessageReducer } from '../reducers/chatMessage';
import socketConfig from '../socket/setup';

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {

  return socketConfig().then(({ send, receive }) => {
    const store = createStore(
      chatMessageReducer,
      composeEnhancers(applyMiddleware(thunkMiddleware.withExtraArgument( send ))),
    );

    receive(store.dispatch);
    return store;
  });
};

export default configureStore;