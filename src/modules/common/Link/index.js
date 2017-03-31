import * as tslib_1 from "tslib";
import React, { PropTypes } from 'react';
import { Linking } from 'react-native';
import ps from 'react-native-ps';
import { Body1, connectTheme } from 'carbon-ui';
const Link = (_a) => {
    var { to, children, style, theme } = _a, other = tslib_1.__rest(_a, ["to", "children", "style", "theme"]);
    const styles = tStyles(theme);
    return (<Body1 style={[styles.base].concat(style)} onPress={() => Linking.openURL(to)} {...other}>
      {children}
    </Body1>);
};
Link.propTypes = {
    to: PropTypes.string,
    children: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    // connectTheme
    theme: PropTypes.object,
};
export default connectTheme(Link);
const tStyles = (theme) => ps({
    base: {
        color: theme.colors.primary,
    },
    web: {
        base: {
            cursor: 'pointer',
        },
    },
});
//# sourceMappingURL=index.js.map