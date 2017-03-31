import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Divider, Display1, Headline, Body1, Body2, Colors as CUIColors, connectTheme, gu } from 'carbon-ui';
import { pushState } from 'react-stack-nav';
import createLeafOrchestrator from '../../../common/createLeafOrchestrator';
import CodeBlock from '../../../common/CodeBlock';
import InlineCode from '../../../common/InlineCode';
import Link from '../../../common/Link';
import Content from '../../../common/Content';
class Responsive extends Component {
    render() {
        const styles = tStyles(this.props.theme);
        return (<Content style={styles.base}>
        <Display1 style={styles.display1}>Responsive UI</Display1>
        
        <Body1 style={styles.break}>
          Carbon UI provides a few tools to make following Material Designs{' '}
          <Link to="https://material.google.com/layout/responsive-ui.html">
            responsive guidelines
          </Link>{' '}
          a little easier.
        </Body1>
        
        <Headline style={styles.headline}>Grid unit</Headline>
      
        <Body1 style={styles.smallBreak}>
          In Material Design, some things, like typography and iconography, are
          on a 4dp square grid, and others, like components, are on an 8dp square
          grid. Carbon UI provides the greatest common divisor, 4, as the constant
          <InlineCode>gu</InlineCode>. gu stands for "grid-unit". I created
          <InlineCode>gu</InlineCode> to be a sort of css unit like px.
          You can use it like:
        </Body1>
        <CodeBlock>{`
        import { gu } from 'carbon-ui'
        
        const MyComponent = () => <View style={styles.base} />
        
        const styles = {
          base: {
            width: 4 * gu,
            height: 4 * gu,
          },
        }
        `}</CodeBlock>
        <Body1 style={styles.smallBreak}>
          That would create a <InlineCode>View</InlineCode> that&apos;s
          16dp x 16dp.
        </Body1>
        
        <Body1 style={styles.break}>
          Using <InlineCode>gu</InlineCode> for all of your sizing keeps
          your layout consistent and your vertical rhythm{' '}
          <Link to="https://www.youtube.com/watch?v=Eo-KmOd3i7s">
            *Nsync
          </Link>.
        </Body1>
        
        <Divider style={styles.break}/>
        
        <Headline style={styles.headline}>Breakpoints</Headline>
        
        <Body1 style={styles.smallBreak}>
          Material design has quite a few{' '}
          <Link to="https://material.google.com/layout/responsive-ui.html#responsive-ui-breakpoints">
            breakpoints
          </Link>.{' '}To simplify, I restricted the ones Carbon UI implements
          to the ones that actually affect behavior and layout:
        </Body1>
        
        <Body1>
          <Body2>Breakpoints.xs</Body2> - 480dp
        </Body1>
        <Body1>
          <Body2>Breakpoints.sm</Body2> - 600dp
        </Body1>
        <Body1>
          <Body2>Breakpoints.ms</Body2> - 840dp
        </Body1>
        <Body1>
          <Body2>Breakpoints.md</Body2> - 960dp
        </Body1>
        <Body1>
          <Body2>Breakpoints.ml</Body2> - 1280dp
        </Body1>
        <Body1>
          <Body2>Breakpoints.lg</Body2> - 1440dp
        </Body1>
        <Body1 style={styles.smallBreak}>
          <Body2>Breakpoints.xl</Body2> - 1600dp
        </Body1>
        
        <Body1>
          You can use the breakpoints with{' '}
          <Link to="https://github.com/tuckerconnelly/uranium">
            Uranium
          </Link>{' '}
          like this:
        </Body1>
        
        <CodeBlock>{`
        import Uranium from 'uranium'
        import { Breakpoints, gu } from 'carbon-ui'
        
        const MyComponent = () =>
          <View css={styles.base} />
        
        const styles = {
          width: 40 * gu,
          height: 40 * gu,
          
          [Breakpoints.xs]: {
            width: 60 * gu,
            height: 60 * gu,
          }
        }
        `}</CodeBlock>
      
        <Body1 style={styles.break}>
          You can check out the source{' '}
          <Link to="https://github.com/tuckerconnelly/carbon-ui/blob/master/src/style/Responsive.js">
            here
          </Link> for a clearer picture.
        </Body1>
        
        <Divider style={styles.break}/>
        
        <Headline style={styles.headline}>Grid system</Headline>
        
        <Body1 style={styles.smallBreak}>
          Material Design has a full-on{' '}
          <Link to="https://material.google.com/layout/responsive-ui.html#responsive-ui-grid">
            grid system
          </Link>{' '}
          with specs for gutters and margins and such.
        </Body1>
        <Body1 style={styles.smallBreak}>
          I didn't implement it because I'm not a fan of strict grid systems.
          You can read the spec and implement it yourself
          pretty easily using <InlineCode>gu</InlineCode> and the
          <InlineCode>Breakpoints</InlineCode>.
        </Body1>
        <Body1 style={styles.smallBreak}>
          Would also accept a PR if someone can do it elegantly.
        </Body1>
      </Content>);
    }
}
Responsive.propTypes = {
    // connectTheme
    theme: PropTypes.object.isRequired,
};
export default createLeafOrchestrator('responsive')(connect(null, { pushState })(connectTheme(Responsive)));
const tStyles = (theme) => ({
    break: {
        marginBottom: 4 * gu,
    },
    smallBreak: {
        marginBottom: 2 * gu,
    },
    display1: {
        marginBottom: 2.5 * gu,
        color: theme.colors.primary,
    },
    headline: {
        marginBottom: 2 * gu,
        color: theme.colors.primary,
    },
    link: {
        color: CUIColors.lightBlue400,
    },
});
//# sourceMappingURL=index.js.map