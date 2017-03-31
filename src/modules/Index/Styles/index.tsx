import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { replaceTop, createOrchestrator } from 'react-stack-nav'

import RouteFade from '../../common/RouteFade'
import NotFound from '../../common/NotFound'
import Theme from './Theme'
import Colors from './Colors'
import Responsive from './Responsive'
import Elevation from './Elevation'
import Typography from './Typography'
import Motion from './Motion'

const VALID_FRAGMENTS = [
  undefined,
  'theme',
  'colors',
  'responsive',
  'elevation',
  'typography',
  'motion',
]

class StyleIndex extends Component<{routeFragment: any, replaceTop: any}, {}> {
  static contextTypes: any
  static propTypes: any
  componentWillMount() {
    this._indexRedirect(this.props)
  }
  componentWillUpdate(nextProps: any) {
    this._indexRedirect(nextProps)
  }
  
  _indexRedirect = ({ routeFragment, replaceTop }: {routeFragment: any, replaceTop: any} ) =>
    routeFragment === '' && replaceTop(0, 'Theme', 'theme')
  
  render() {
    const { routeFragment } = this.props
    return (
      <View style={styles.base}>
        <RouteFade active={routeFragment === 'theme'}><Theme /></RouteFade>
        <RouteFade active={routeFragment === 'colors'}><Colors /></RouteFade>
        <RouteFade active={routeFragment === 'responsive'}><Responsive /></RouteFade>
        <RouteFade active={routeFragment === 'elevation'}><Elevation /></RouteFade>
        <RouteFade active={routeFragment === 'typography'}><Typography /></RouteFade>
        <RouteFade active={routeFragment === 'motion'}><Motion /></RouteFade>
        <RouteFade active={VALID_FRAGMENTS.indexOf(routeFragment) === -1}><NotFound /></RouteFade>
      </View>
    )
  }
}

StyleIndex.contextTypes = {
  store: PropTypes.object,
}

StyleIndex.propTypes = {
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
  createOrchestrator('styles')(
  StyleIndex))

const styles = {
  base: {},
}
