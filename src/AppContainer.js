import React, { Component } from 'react';
import AppNav from './routes';
import { _components } from './components';

class AppContainer extends Component {
render() {
    return (
        <_components._root>
            <AppNav/>
        </_components._root>
    );
}
}
export default AppContainer;
