import {ViewProperties, ViewPropertiesAndroid, ViewPropertiesIOS, GestureResponderHandlers, Touchable, ViewStatic} from 'react-native'
import * as React from 'react'


declare module 'react-native' {

  export interface ViewProperties extends ViewPropertiesAndroid, ViewPropertiesIOS, GestureResponderHandlers, Touchable, React.Props<ViewStatic> {
    css?: any;
  }

  
}


