import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from './store/store'
import AccountLvl from './components/AccountLvl';

const App = () => {

    const initialState = {
        user: {
            firstName: "Jessie",
            lastName: "Burton",
            accountLvl: 0
        },
        accounts: {
            account1: 1234,
            account2: 98.11
        }
    }

    useEffect(() => {
      console.log(initialState);
    }, []);


    return (
        <Provider value={initialState}>
            <AccountLvl />
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
