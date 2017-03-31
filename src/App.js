import * as React from 'react';
import { Component, PropTypes } from 'react';
import { ThemeProvider } from 'carbon-ui';
import Layout from './modules';
import theme from './theme';
class App extends Component {
    render() {
        return (<ThemeProvider theme={theme}>
        <Layout>
          {this.props.children}
        </Layout>
      </ThemeProvider>);
    }
}
App.propTypes = {
    children: PropTypes.node,
};
export default App;
//# sourceMappingURL=App.js.map