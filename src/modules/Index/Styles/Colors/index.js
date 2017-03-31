import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import ps from 'react-native-ps';
import { Display1, Body1, connectTheme, gu } from 'carbon-ui';
import { pushState } from 'react-stack-nav';
import createLeafOrchestrator from '../../../common/createLeafOrchestrator';
import CodeBlock from '../../../common/CodeBlock';
import InlineCode from '../../../common/InlineCode';
import Link from '../../../common/Link';
import Content from '../../../common/Content';
class Colors extends Component {
    render() {
        const styles = tStyles(this.props.theme);
        return (<Content style={styles.base}>
        <Display1 style={styles.display1}>Colors</Display1>
        <Body1 style={styles.smallBreak}>
          Material Design has a vibrant{' '}
          <Link to="https://material.google.com/style/color.html">
            set of colors
          </Link>{' '}
          you can use in your app.
        </Body1>
        <Body1 style={styles.smallBreak}>
          You can use access these using the{' '}
          <Link to="https://github.com/tuckerconnelly/carbon-ui/blob/master/src/style/Colors.js">
            Colors object
          </Link>:
        </Body1>
        <CodeBlock style={styles.smallBreak}>{`
        import { Colors } from 'carbon-ui'
        
        const MyComponent () =>
          <View style={{ backgroundColor: Colors.orange400 }} />
        `}</CodeBlock>

        <Body1>
          I recommend using your{' '}
          <Text style={styles.link} onPress={() => this.props.pushState(0, 0, '/styles/theme')}>
            theme
          </Text>{' '}
          for any theme colors, but for one-off styles the
          <InlineCode>Colors</InlineCode> object works great.
        </Body1>
      </Content>);
    }
}
Colors.propTypes = {
    // connect
    pushState: PropTypes.func.isRequired,
    // connectTheme
    theme: PropTypes.object.isRequired,
};
export default createLeafOrchestrator('colors')(connect(null, { pushState })(connectTheme(Colors)));
const tStyles = (theme) => ps({
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
    link: {
        color: theme.colors.primary,
    },
    web: {
        link: {
            cursor: 'pointer',
        },
    },
});
//# sourceMappingURL=index.js.map