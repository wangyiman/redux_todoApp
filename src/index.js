import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import First from './components/First';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path=":filter?/" component={First}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
