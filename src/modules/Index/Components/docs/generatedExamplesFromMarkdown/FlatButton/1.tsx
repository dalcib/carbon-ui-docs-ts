 import * as React from 'react'
 import { View } from 'react-native'
 import { FlatButton } from 'carbon-ui'

 export default () =>
   <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
     <FlatButton>Hey I'm a button</FlatButton>
     <FlatButton onPress={() => {}}>Press me</FlatButton>
     <FlatButton disabled>Hey I'm disabled</FlatButton>
   </View>
