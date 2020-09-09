
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {initStore} from './redux/store';
import AppContainer from './AppContainer';

const store = initStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                    <AppContainer />
            </Provider>
        );
    }
}

export default App;