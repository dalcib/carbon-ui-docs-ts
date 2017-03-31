import React, { Component, PropTypes } from 'react';
import { Animated, View } from 'react-native';
import { FlatButton, Animations, Elevation, gu } from 'carbon-ui';
import { animate } from 'uranium';
import CodeBlock from '../../CodeBlock';
class ExampleCard extends Component {
    constructor() {
        super(...arguments);
        this.state = { expanded: false };
        this._opacityAV = new Animated.Value(0);
        this._heightAV = new Animated.Value(0);
        this._toggleExpanded = () => this.setState({ expanded: !this.state.expanded });
    }
    componentWillUpdate(_, nextState) {
        const { expanded } = this.state;
        if (!expanded && nextState.expanded) {
            Animations.standard(this._heightAV).start();
            Animations.standard(this._opacityAV, { delay: 50 }).start();
        }
        if (expanded && !nextState.expanded) {
            Animations.standard(this._heightAV, { toValue: 0, delay: 50 }).start();
            Animations.standard(this._opacityAV, { toValue: 0 }).start();
        }
    }
    render() {
        const { source, children } = this.props;
        const { expanded } = this.state;
        return (<View style={styles.base}>
        <View style={styles.preview}>
          {children}
        </View>
        <Animated.View style={[
            styles.preview,
            animate('opacity', 0, 1, this._opacityAV),
            animate('maxHeight', 0, 1000, this._heightAV),
        ]}>
          <CodeBlock>{source}</CodeBlock>
        </Animated.View>
        <View style={styles.info}>
          <FlatButton style={styles.expandButton} onPress={this._toggleExpanded}>
            {!expanded ? 'View source' : 'Hide source'}
          </FlatButton>
        </View>
      </View>);
    }
}
ExampleCard.propTypes = {
    /**
     * The source of the example
     */
    source: PropTypes.string,
    /**
     * The preview of the example
     */
    children: PropTypes.node,
};
export default ExampleCard;
const styles = {
    base: Object.assign({ borderRadius: 2 }, Elevation.dp2),
    preview: {
        padding: 2 * gu,
    },
    info: {
        padding: 2 * gu,
    },
    expandButton: {
        alignSelf: 'flex-end',
    },
};
//# sourceMappingURL=index.js.map