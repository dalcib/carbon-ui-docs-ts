import * as tslib_1 from "tslib";
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'react-stack-nav';
import ps from 'react-native-ps';
import { Animated, Platform, Linking } from 'react-native';
import { NavigationDrawer, TouchableRipple, List, ListItem, Divider, Headline, Body1, Animations, Colors, connectTheme, gu } from 'carbon-ui';
import { animate } from 'uranium';
import componentDocs from '../../modules/Index/Components/docs';
import { closeMenu } from '../../modules/duck';
const AnimatedList = Animated.createAnimatedComponent(List);
const NESTING_DEPTH = 12 * gu;
class Navigation extends Component {
    constructor() {
        super(...arguments);
        this.state = { expandedItems: [], finishedOpening: false, contentVisible: undefined };
        this._navigate = (to, title = '') => {
            this.props.closeMenu();
            this.props.pushState(0, title, to);
        };
        this._toggleExpandedItem = (name) => {
            const expandedItems = [...this.state.expandedItems];
            const index = expandedItems.indexOf(name);
            if (index === -1)
                return this.setState({ expandedItems: expandedItems.concat([name]) });
            expandedItems.splice(index, 1);
            this.setState({ expandedItems });
        };
        this._openExternalLink = (url) => Linking.openURL(url);
        this._contentAV = new Animated.Value(this.props.menuOpen ? 1 : 0);
        this._fadeInContent = () => {
            this.setState({ contentVisible: true }, () => Animations.entrance(this._contentAV, { useNativeDriver: true }).start());
        };
        this._hideContent = () => new Promise(resolve => this.setState({ contentVisible: false }, () => {
            this._contentAV.setValue(0);
            resolve();
        }));
    }
    render() {
        const _a = this.props, { url, theme, menuOpen, closeMenu } = _a, other = tslib_1.__rest(_a, ["url", "theme", "menuOpen", "closeMenu"]);
        const { expandedItems, contentVisible } = this.state;
        const styles = tStyles(theme);
        // PERFORMANCE OPTIMIZATION Disable list animations on android
        const ListComponent = Platform.OS === 'android' ? List : AnimatedList;
        return (<NavigationDrawer onFinishOpening={this._fadeInContent} onStartClosing={this._hideContent} open={menuOpen} menuStyle={styles.menu} onOverlayPress={closeMenu} {...other}>
        <TouchableRipple rippleColor={Colors.white} style={styles.listHeading} onPress={() => this._navigate('')}>
          <Headline style={styles.listHeadingText}>Carbon UI</Headline>
        </TouchableRipple>
        {contentVisible &&
            <ListComponent style={[
                styles.list,
                Platform.OS !== 'android' && animate('opacity', 0, 1, this._contentAV),
            ]}>
            <ListItem primaryText="Getting started" expanded={expandedItems.indexOf('getting-started') !== -1} nestingDepth={NESTING_DEPTH} onPress={() => this._toggleExpandedItem('getting-started')}>
              <ListItem primaryText="Installation" active={url === '/getting-started/installation'} onPress={() => this._navigate('/getting-started/installation', 'Installation')} style={styles.nested1}/>
              <ListItem primaryText="Usage with Exponent" active={url === '/getting-started/exponent'} onPress={() => this._navigate('/getting-started/exponent', 'Usage with Exponent')} style={styles.nested1}/>
              <ListItem primaryText="Known issues" active={url === '/getting-started/known-issues'} onPress={() => this._navigate('/getting-started/known-issues', 'Known issues')} style={styles.nested1}/>
            </ListItem>
            <ListItem primaryText="Styles" expanded={expandedItems.indexOf('styles') !== -1} nestingDepth={NESTING_DEPTH} onPress={() => this._toggleExpandedItem('styles')}>
              <ListItem primaryText="Theme" active={url === '/styles/theme'} onPress={() => this._navigate('/styles/theme', 'Theme')} style={styles.nested1}/>
              <ListItem primaryText="Colors" active={url === '/styles/colors'} onPress={() => this._navigate('/styles/colors', 'Colors')} style={styles.nested1}/>
              <ListItem primaryText="Responsive UI" active={url === '/styles/responsive'} onPress={() => this._navigate('/styles/responsive', 'Responsive UI')} style={styles.nested1}/>
              <ListItem primaryText="Elevation and shadows" active={url === '/styles/elevation'} onPress={() => this._navigate('/styles/elevation', 'Elevation and shadows')} style={styles.nested1}/>
              <ListItem primaryText="Typography" active={url === '/styles/typography'} onPress={() => this._navigate('/styles/typography', 'Typography')} style={styles.nested1}/>
              <ListItem primaryText="Motion" active={url === '/styles/motion'} onPress={() => this._navigate('/styles/motion', 'Motion')} style={styles.nested1}/>
            </ListItem>
            
            {Platform.OS !== 'android' &&
                <ListItem primaryText="Components" expanded={expandedItems.indexOf('components') !== -1} nestingDepth={NESTING_DEPTH} onPress={() => this._toggleExpandedItem('components')}>
                {Object.keys(componentDocs.tree).sort().map(name => {
                    const isComponent = componentDocs.tree[name].description;
                    if (isComponent) {
                        return (<ListItem key={name} primaryText={name} active={url === `/components/${name}`} onPress={() => this._navigate(`/components/${name}`, name)} style={styles.nested1}/>);
                    }
                    return (<ListItem key={name} primaryText={name} expanded={expandedItems.indexOf(name) !== -1} nestingDepth={NESTING_DEPTH} onPress={() => this._toggleExpandedItem(name)} style={styles.nested1}>
                      {Object.keys(componentDocs.tree[name]).sort().map(nestedName => <ListItem key={nestedName} primaryText={nestedName} active={url === `/components/${nestedName}`} onPress={() => this._navigate(`/components/${nestedName}`, nestedName)} style={styles.nested2}/>)}
                    </ListItem>);
                })}
              </ListItem>}
            <ListItem primaryText="Related libraries" active={url === '/related-libraries'} onPress={() => this._navigate('/related-libraries', 'Related libraries')}/>
            
            <Divider />
            
            <Body1 style={styles.navigationSubheader}>
              Resources
            </Body1>
            
            <ListItem primaryText="GitHub" onPress={() => this._openExternalLink('https://github.com/tuckerconnelly/carbon-ui')}/>
          </ListComponent>}
      </NavigationDrawer>);
    }
}
Navigation.propTypes = {
    // connect
    url: PropTypes.string.isRequired,
    pushState: PropTypes.func.isRequired,
    menuOpen: PropTypes.bool.isRequired,
    closeMenu: PropTypes.func.isRequired,
    // connectTheme
    theme: PropTypes.object.isRequired,
};
const mapStateToProps = ({ navigation, app }) => ({
    url: navigation.history[navigation.index].url,
    menuOpen: app.menuOpen,
});
const mapDispatchToProps = { pushState, closeMenu };
export default connect(mapStateToProps, mapDispatchToProps)(connectTheme(Navigation));
const tStyles = (theme) => ps({
    base: {},
    menu: {},
    listHeading: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 4 * gu,
        paddingTop: 2 * gu,
        paddingBottom: 2 * gu,
    },
    listHeadingText: {
        color: Colors.whitePrimary,
    },
    navigationSubheader: {
        margin: 4 * gu,
        color: Colors.blackSecondary,
    },
    nested1: {
        paddingLeft: NESTING_DEPTH,
    },
    nested2: {
        paddingLeft: 2 * NESTING_DEPTH,
    },
    // Account for iOS header
    ios: {
        listHeading: {
            paddingTop: 24,
        },
    },
});
//# sourceMappingURL=index.js.map