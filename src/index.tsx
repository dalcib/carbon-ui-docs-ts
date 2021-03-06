
import * as React from 'react'
import { AppRegistry } from 'react-native'
import { WebStyles } from 'carbon-ui'

import App from './index.web'
declare const document: any

class AppWithStyles extends React.Component<{}, {}> {
  render() { return (
   <App><WebStyles /></App>
  )}
}

AppRegistry.registerComponent('CarbonUIDocs', () => AppWithStyles)
AppRegistry.runApplication('CarbonUIDocs', { rootTag: document.getElementById('root') })
