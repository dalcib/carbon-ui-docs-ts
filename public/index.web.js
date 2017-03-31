import * as React from 'react';
import { AppRegistry } from 'react-native';
import { WebStyles } from 'carbon-ui';
import App from './src/index';
class AppWithStyles extends React.Component {
    render() {
        return (<App><WebStyles /></App>);
    }
}
AppRegistry.registerComponent('CarbonUIDocs', () => AppWithStyles);
AppRegistry.runApplication('CarbonUIDocs', { rootTag: document.getElementById('root') });
//# sourceMappingURL=index.web.js.map