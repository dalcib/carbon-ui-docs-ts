import * as React from 'react';
import { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'carbon-ui';
import Layout from './modules';
import createStore from './redux';
import theme from './theme';
const store = createStore({});
class App extends Component {
    render() {
        return (<Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            {this.props.children}
          </Layout>
        </ThemeProvider>
      </Provider>);
    }
}
App.propTypes = {
    children: PropTypes.node,
};
export default App;
//# sourceMappingURL=index.web.js.map