import * as tslib_1 from "tslib";
import * as React from 'react';
import { PropTypes } from 'react';
import { View } from 'react-native';
import { Colors, gu } from 'carbon-ui';
import Uranium from 'uranium';
const Content = (_a) => {
    var { children } = _a, other = tslib_1.__rest(_a, ["children"]);
    return <View css={styles.base} {...other}>
    {children}
  </View>;
};
Content.propTypes = {
    children: PropTypes.node,
};
export default Uranium(Content);
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
};
//# sourceMappingURL=index.js.map