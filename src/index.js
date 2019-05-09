import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './routers/App';
import configureStore from './store/configureStore'
import './styles/index.scss';
import 'normalize.css/normalize.css';
import { startSetExpenses } from './actions/expenses';
import { firebase } from './firebase/firebase';
import { createBrowserHistory } from 'history';
import { login, logout } from './actions/auth';

const history = createBrowserHistory();

const store = configureStore();

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(<Provider store={store}><App history={history} /></Provider>, document.getElementById('root'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        });
    } else {
        store.dispatch(logout())
        renderApp();
        history.push('/');
    }
})
