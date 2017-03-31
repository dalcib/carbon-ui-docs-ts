import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Divider, Headline, Display1, Body1, Body2, Colors, connectTheme, gu, theme } from 'carbon-ui'
import { pushState } from 'react-stack-nav'

import createLeafOrchestrator from '../../../common/createLeafOrchestrator'
import CodeBlock from '../../../common/CodeBlock'
import InlineCode from '../../../common/InlineCode'
import Link from '../../../common/Link'
import Content from '../../../common/Content'

class Motion extends Component<{}, {}> {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Motion</Display1>
        <Body1 style={styles.break}>
          Motion is a{' '}
          <Link to="https://material.google.com/motion/material-motion.html">
            complex and layered
          </Link>{' '}
          subject in Material Design. Carbon UI does its best to simplify the
          creation of Animations for you.
        </Body1>
        
        <Headline style={styles.headline}>The Animations object</Headline>
        
        <Body1 style={styles.smallBreak}>
          Material Design motion boils down to <Body2>six animation types</Body2>:
        </Body1>
        
        <Body1>
          <Body2>standard</Body2> - For transitions within screen bounds. 80% of
          your animations will be this.
        </Body1>
        <Body1>
          <Body2>large</Body2> - For large transitions, such as when switching
            routes.
        </Body1>
        <Body1>
          <Body2>entrance</Body2> - For when material transitions onto the screen
        </Body1>
        <Body1>
          <Body2>exit</Body2> - For when material permanently exits the screen
        </Body1>
        <Body1 style={styles.smallBreak}>
          <Body2>tempExit</Body2> - For when material temporarily exits the screen
        </Body1>
        
        <Body1>
          All of these can be used on the <InlineCode>Animations</InlineCode> object like so:
        </Body1>
        
        <CodeBlock>{`
        import { Animations } from 'carbon-ui'
        
        class MyComponent extends Component {
          componentDidMount() {
            Animations.standard(this._showAV).start()
          }
          
          _showAV = new Animated.Value(0)
          
          return (
            <View
              style={{
                height: Animated.interpolation({
                  inputRange: [0, 1],
                  outputRange: [100, 200],
                }),
                width: Animated.interpolation({
                  inputRange: [0, 1],
                  outputRange: [100, 200],
                }),
              }} />
          )
        }
        `}</CodeBlock>
        <Body1 style={styles.smallBreak}>
          <InlineCode>Animations.standard()</InlineCode> creates an
          <InlineCode>Animated.timing()</InlineCode>
          automatically, with the proper duration and easing, and goes from
          0 to 1.
        </Body1>

        <Body1 style={styles.smallBreak}>
          Then we have to interpolate the value to get the actual width/height
          that we want.
        </Body1>

        <Body1 style={styles.smallBreak}>
          In the end the component above animates from
          <InlineCode>width: 100, height: 100</InlineCode> to
          <InlineCode>width: 200, height: 200</InlineCode>
        </Body1>

        <Body1 style={styles.smallBreak}>
          If we wanted to go back to the starting value, we could do a standard
          animation back to <InlineCode>0</InlineCode>:
        </Body1>

        <CodeBlock>{`
        Animations.standard(this._showAV, { toValue: 0 }).start()
        `}</CodeBlock>

        <Body1>
          <InlineCode>Animations.large()</InlineCode>,
          <InlineCode>Animations.entrance()</InlineCode>, and the
          rest are all available on the <InlineCode>Animations</InlineCode> object.
          They all follow the signature:
        </Body1>

        <CodeBlock>{`
        Animations.standard(AnimatedValue, timingOptions)
        `}</CodeBlock>

        <Body1 style={styles.smallBreak}>
          <InlineCode>timingOptions</InlineCode> has the same options as
          <InlineCode>Animated.timing</InlineCode>, and will be merged into the
          default options for that animation.
        </Body1>
        <Body1>
          So if you wanted to do an <InlineCode>exit</InlineCode> animation with
          a duration of 200ms, delayed by 50ms, you could do:
        </Body1>

        <CodeBlock style={styles.break}>{`
        Animations.exit(this._exitAV, { duration: 200, delay: 50 }).start()
        `}</CodeBlock>

        <Divider style={styles.break} />

        <Headline style={styles.headline}>Nitty gritty customization</Headline>

        <Body1>
          Carbon UI also has a <InlineCode>Durations</InlineCode> object and a
          <InlineCode>Curves</InlineCode> object if you want to build your own to-spec
          animations. You can read about them in the{' '}
          <Link to="https://github.com/tuckerconnelly/carbon-ui/blob/master/src/style/Animations.js">
            source
          </Link>.
        </Body1>
      </Content>
    )
  }
}

Motion.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  createLeafOrchestrator('motion')(
  connect(null, { pushState })(
  connectTheme(
  Motion)))

const tStyles = (theme: theme) => ({
  break: {
    marginBottom: 8 * gu,
  },
  smallBreak: {
    marginBottom: 4 * gu,
  },

  display1: {
    marginBottom: 5 * gu,

    color: theme.colors.primary,
  },

  headline: {
    marginBottom: 4 * gu,

    color: theme.colors.primary,
  },

  captionLink: {
    color: Colors.lightBlue400,
  },
})
