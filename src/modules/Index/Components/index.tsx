import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Animated, View } from 'react-native'
import { replaceTop, createOrchestrator } from 'react-stack-nav'
import { Animations, theme } from 'carbon-ui'
import { animate } from 'uranium'

import ComponentDoc from './ComponentDoc'

interface CompnentsIndexProps {theme: theme, routeFragment?: any, replaceTop: any, children?: any}

class ComponentsIndex extends Component  <CompnentsIndexProps, {activeComponent: any}> {
  static propTypes: any
  static contextTypes: any
  state = { activeComponent: this.props.routeFragment }

  componentWillMount() {
    this._indexRedirect(this.props)
  }
  
  componentWillReceiveProps(next: any) {
    if (this.props.routeFragment === next.routeFragment) return
    
    Animations.exit(this._showAV, { duration: 112, toValue: 0 }).start(() => {
      this.setState({ activeComponent: next.routeFragment }, () => {
        if (this.props.routeFragment === undefined) return
        
        Animations.entrance(this._showAV, { duration: 112 }).start()
      })
    })
  }
  
  componentWillUpdate(nextProps: any) {
    this._indexRedirect(nextProps)
  }
  
  _indexRedirect = ({ routeFragment, replaceTop }: any) =>
    routeFragment === '' && replaceTop(0, 'AppBar', 'AppBar')
  
  _showAV = new Animated.Value(this.props.routeFragment === undefined ? 0 : 1)
  
  render() {
    if (this.state.activeComponent === undefined || this.state.activeComponent === '') return <View />
    
    return (
      <Animated.View style={animate('opacity', 0, 1, this._showAV)}>
        <ComponentDoc component={this.state.activeComponent} />
      </Animated.View>
    )
  }
}

ComponentsIndex.contextTypes = {
  store: PropTypes.object,
}

ComponentsIndex.propTypes = {
  // connect
  replaceTop: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  
  // createOrchestrator
  routeFragment: PropTypes.string,
}

const mapStateToProps = ({ navigation }: any) => ({
  url: navigation.history[navigation.index].url,
})
const mapDispatchToProps = { replaceTop }

export default
  connect(mapStateToProps, mapDispatchToProps)(
  createOrchestrator('components')(
  ComponentsIndex))

/*const styles = {
  base: {},
}*/
