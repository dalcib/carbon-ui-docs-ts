import * as React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import { NavigationDrawer, List, ListItem, RaisedButton } from 'carbon-ui';
export default class Example extends Component {
    constructor() {
        super(...arguments);
        this.state = { open: false };
        this._toggleOpen = () => this.setState({ open: !this.state.open });
    }
    render() {
        return (<View style={{ height: 200 }}>
         <NavigationDrawer open={this.state.open} onOverlayPress={this._toggleOpen}>
           <List>
             <ListItem primaryText="Link one" onPress={this._toggleOpen}/>
             <ListItem primaryText="Link two" onPress={this._toggleOpen}/>
           </List>
         </NavigationDrawer>
         <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
           <RaisedButton onPress={this._toggleOpen}>
             Toggle
           </RaisedButton>
         </View>
       </View>);
    }
}
//# sourceMappingURL=1.js.map