import React, { Component, PropTypes } from 'react'
import { Display1, Body1, connectTheme, gu, theme } from 'carbon-ui'

import Content from '../Content'

  class NotFound extends Component<{theme: theme}, any> {
  static propTypes: any
  render() {
    const styles = tStyles(this.props.theme)

    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Not found</Display1>
        <Body1 style={styles.body}>
          Hmm, couldn&apos;t find that.
        </Body1>
      </Content>
    )
  }
}

NotFound.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connectTheme(
  NotFound)

const tStyles = (theme: theme) => ({
  display1: {
    marginBottom: 5 * gu,

    color: theme.colors.primary,

    alignSelf: 'center',
  },

  body: {
    alignSelf: 'center',
  },
  base: {}
})
