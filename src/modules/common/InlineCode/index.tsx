import React, { PropTypes, SFC } from 'react'
import { Text } from 'react-native'
import { Colors } from 'carbon-ui'

const InlineCode: SFC<{children?: any, style?: any}> = ({ children, style }) =>
  <Text>
    {' '}
    <Text style={[styles.inlineCodeBlock].concat([style])}>
      {children}
    </Text>
    {' '}
  </Text>

InlineCode.propTypes = {
  children: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default InlineCode

const styles = {
  inlineCodeBlock: {
    backgroundColor: Colors.grey200,
    color: Colors.blackPrimary,

    fontFamily: 'RobotoMono-Regular',
    fontSize: 13,
  },
}
