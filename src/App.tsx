import * as React from 'react'
import { Component, PropTypes } from 'react'
import { ThemeProvider } from 'carbon-ui'

import Layout from './modules'
import theme from './theme'

class App extends Component<{}, {}> {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          {this.props.children}
        </Layout>
      </ThemeProvider>
    )
  }
}

export default App
