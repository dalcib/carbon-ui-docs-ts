import React, { Component, PropTypes } from 'react';
import { DataTable, Display1, Title, Breakpoints, connectTheme, gu } from 'carbon-ui';
import Content from '../../../common/Content';
import Uranium from 'uranium';
import get from 'lodash/get';
import createLeafOrchestrator from '../../../common/createLeafOrchestrator';
import NotFound from '../../../common/NotFound';
import componentDocs from '../../../Index/Components/docs';
import MarkdownBlock from '../../../common/MarkdownBlock';
class ComponentDoc extends Component {
    constructor() {
        super(...arguments);
        this._mobileMQLListener = () => this.forceUpdate();
    }
    componentDidMount() {
        this._mobileMQL.addListener(this._mobileMQLListener);
    }
    componentWillUnmount() {
        this._mobileMQL.removeListener(this._mobileMQLListener);
    }
    get _mobileMQL() {
        return global.matchMedia(Breakpoints.sm.split('@media ')[1]);
    }
    render() {
        const { component } = this.props;
        const styles = tStyles(this.props.theme);
        const doc = componentDocs.findDocForName(component);
        if (!doc)
            return <NotFound />;
        const { description, props } = doc;
        // const descriptionWithoutNewlines = description.replace(/\n/gi, ' ')
        return (<Content style={styles.base}>
        <Display1 style={styles.display1}>{component}</Display1>
        {!!description.length &&
            <MarkdownBlock component={component} style={styles.break}>
            {description}
          </MarkdownBlock>}
        <Title style={styles.break}>Props</Title>
        <DataTable>
          <DataTable.HeaderRow>
            <DataTable.HeaderCell>Name</DataTable.HeaderCell>
            <DataTable.HeaderCell>Type</DataTable.HeaderCell>
            <DataTable.HeaderCell>Default</DataTable.HeaderCell>
            {this._mobileMQL.matches &&
            <DataTable.HeaderCell>Description</DataTable.HeaderCell>}
          </DataTable.HeaderRow>
          {!!Object.keys(props).length && Object.keys(props).map(prop => <DataTable.Row key={prop}>
              <DataTable.Cell>{prop}</DataTable.Cell>
              <DataTable.Cell>{props[prop].type.name}</DataTable.Cell>
              <DataTable.Cell>{get(props[prop], 'defaultValue.value')}</DataTable.Cell>
              {this._mobileMQL.matches &&
            <DataTable.Cell>{props[prop].description}</DataTable.Cell>}
            </DataTable.Row>)}
        </DataTable>
      </Content>);
    }
}
ComponentDoc.propTypes = {
    component: PropTypes.string.isRequired,
    // connectTheme
    theme: PropTypes.object.isRequired,
};
export default createLeafOrchestrator(/\w+/)(connectTheme(Uranium(ComponentDoc)));
const tStyles = (theme) => ({
    break: {
        marginBottom: 8 * gu,
    },
    smallBreak: {
        marginBottom: 4 * gu,
    },
    display1: {
        marginBottom: 5 * gu,
        color: theme.colors.primary,
    },
});
//# sourceMappingURL=index.js.map