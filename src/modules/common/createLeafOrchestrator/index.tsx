import React, { PropTypes, SFC } from 'react'

import { createOrchestrator } from 'react-stack-nav'

import NotFound from '../NotFound'

const VALID_FRAGMENTS = [undefined, '']

export default function createLeafOrchestrator(fragment: any) {
  return (ComposedComponent: React.ComponentClass<any> | React.StatelessComponent<any>) => {
    const LeafOrchestrator: SFC<{routeFragment?: string}> = props => {
      if (VALID_FRAGMENTS.indexOf(props.routeFragment) === -1) return <NotFound />

      return <ComposedComponent {...props} />
    }

    LeafOrchestrator.propTypes = {
      // createOrchestrator
      routeFragment: PropTypes.string,
    }

    return createOrchestrator(fragment)(LeafOrchestrator)
  }
}
