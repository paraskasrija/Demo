import React, { Component } from 'react';
import App from './routes';
import { _components } from './components';

class AppContainer extends Component {
render() {
    return (
        <_components._root>
            <App/>
        </_components._root>
    );
}
}
export default AppContainer;
