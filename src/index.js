
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { _initStore } from './redux';
import { PersistGate } from 'redux-persist/integration/react'
import AppContainer from './AppContainer';

const { store, persistor } = _initStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppContainer />
            </PersistGate>
        </Provider>
        );
    }
}

export default App;