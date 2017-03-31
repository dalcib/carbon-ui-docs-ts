import * as React from 'react'
import { PropTypes, SFC } from 'react'
import { View } from 'react-native'
import { createOrchestrator } from 'react-stack-nav'

import RouteFade from '../common/RouteFade'
import NotFound from '../common/NotFound'

import HomePage from './HomePage'
import GettingStarted from './GettingStarted'
import Styles from './Styles'
import Components from './Components'
import RelatedLibraries from './RelatedLibraries'

const VALID_FRAGMENTS = [
  undefined,
  '',
  'getting-started',
  'styles',
  'components',
  'related-libraries',
]

const Index: SFC<{routeFragment: any}> = ({ routeFragment }) =>
  <View style={styles.base}>
    <RouteFade active={routeFragment === ''}><HomePage /></RouteFade>
    <GettingStarted />
    <Styles />
    <Components />
    <RouteFade active={routeFragment === 'related-libraries'}><RelatedLibraries /></RouteFade>
    <RouteFade active={VALID_FRAGMENTS.indexOf(routeFragment) === -1}><NotFound /></RouteFade>
  </View>

Index.propTypes = {
  // createOrchestrator
  routeFragment: PropTypes.string.isRequired,
}

export default
  createOrchestrator()(
  Index)

const styles = {
  base: {
    position: 'relative',
  },
}
