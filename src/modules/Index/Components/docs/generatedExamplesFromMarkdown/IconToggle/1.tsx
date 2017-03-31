 import * as React from 'react'
 import { View } from 'react-native'
 import { IconToggle } from 'carbon-ui'

 export default () =>
   <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
     <IconToggle name="add" />
     <IconToggle name="add" onPress={()=>{}} />
     <IconToggle name="favorite" />
     <IconToggle name="account_circle" />
   </View>
