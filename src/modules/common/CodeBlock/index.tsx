import * as React from 'react'
import { PropTypes, SFC } from 'react'
import { Text, View } from 'react-native'
import ps from 'react-native-ps'
import { Colors, gu } from 'carbon-ui'
//import unindent from 'unindent'

const CodeBlock: SFC<{children?: any, style?: any}> = ({ children, style }) =>
  <View style={[styles.base].concat([style])}>
    <Text style={styles.text}>{children}</Text>
  </View>

CodeBlock.propTypes = {
  children: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default CodeBlock

const styles = ps({
  base: {
    padding: 4 * gu,
    marginVertical: 4 * gu,

    backgroundColor: Colors.grey200,
  },

  text: {
    color: Colors.blackPrimary,

    fontFamily: 'RobotoMono-Regular',
    fontSize: 13,
  },

  web: {
    text: {
      whiteSpace: 'pre-wrap',
    },
  },
})
