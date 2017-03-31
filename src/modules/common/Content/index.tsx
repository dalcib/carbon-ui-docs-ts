import * as React from 'react'
import { PropTypes, SFC } from 'react'
import { View } from 'react-native'
import { Colors, gu } from 'carbon-ui'
import Uranium from 'uranium'

const Content: SFC<any>  = ({ children, ...other }) =>
  <View css={styles.base} {...other}>
    {children}
  </View>

Content.propTypes = {
  children: PropTypes.node,
}

export default
  Uranium(
  Content)

const styles = {
  base: {
    paddingHorizontal: 4 * gu,
    paddingTop: 4 * gu,
    paddingBottom: 16 * gu,

    flex: 1,
    alignSelf: 'stretch',

    backgroundColor: Colors.white,

    [`@media (min-width: ${190 * gu}px)`]: {
      width: 190 * gu,

      alignSelf: 'center',
    },

    [`@media (min-width: ${290 * gu}px)`]: {
      width: 290 * gu,

      alignSelf: 'center',
    },
  },
}
