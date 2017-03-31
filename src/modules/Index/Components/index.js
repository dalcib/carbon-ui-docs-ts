import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Animated, View } from 'react-native';
import { replaceTop, createOrchestrator } from 'react-stack-nav';
import { Animations } from 'carbon-ui';
import { animate } from 'uranium';
import ComponentDoc from './ComponentDoc';
class ComponentsIndex extends Component {
    constructor() {
        super(...arguments);
        this.state = { activeComponent: this.props.routeFragment };
        this._indexRedirect = ({ routeFragment, replaceTop }) => routeFragment === '' && replaceTop(0, 'AppBar', 'AppBar');
        this._showAV = new Animated.Value(this.props.routeFragment === undefined ? 0 : 1);
    }
    componentWillMount() {
        this._indexRedirect(this.props);
    }
    componentWillReceiveProps(next) {
        if (this.props.routeFragment === next.routeFragment)
            return;
        Animations.exit(this._showAV, { duration: 112, toValue: 0 }).start(() => {
            this.setState({ activeComponent: next.routeFragment }, () => {
                if (this.props.routeFragment === undefined)
                    return;
                Animations.entrance(this._showAV, { duration: 112 }).start();
            });
        });
    }
    componentWillUpdate(nextProps) {
        this._indexRedirect(nextProps);
    }
    render() {
        if (this.state.activeComponent === undefined || this.state.activeComponent === '')
            return <View />;
        return (<Animated.View style={animate('opacity', 0, 1, this._showAV)}>
        <ComponentDoc component={this.state.activeComponent}/>
      </Animated.View>);
    }
}
ComponentsIndex.contextTypes = {
    store: PropTypes.object,
};
ComponentsIndex.propTypes = {
    // connect
    replaceTop: PropTypes.func.isRequired,
    // createOrchestrator
    routeFragment: PropTypes.string,
};
const mapStateToProps = ({ navigation }) => ({
    url: navigation.history[navigation.index].url,
});
const mapDispatchToProps = { replaceTop };
export default connect(mapStateToProps, mapDispatchToProps)(createOrchestrator('components')(ComponentsIndex));
/*const styles = {
  base: {},
}*/
//# sourceMappingURL=index.js.map