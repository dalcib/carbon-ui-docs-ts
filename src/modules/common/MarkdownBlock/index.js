import * as tslib_1 from "tslib";
import * as React from 'react';
import { PropTypes } from 'react';
import { View } from 'react-native';
import SimpleMarkdown from 'simple-markdown';
import rulesForComponent from './rules';
const MarkdownBlock = (_a) => {
    var { children, component } = _a, other = tslib_1.__rest(_a, ["children", "component"]);
    const rules = rulesForComponent(component);
    const rawBuiltParser = SimpleMarkdown.parserFor(rules);
    const parser = (source) => rawBuiltParser(`${source}\n\n`, { inline: false });
    const reactOutput = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'));
    return (<View {...other}>
      {reactOutput(parser(children))}
    </View>);
};
MarkdownBlock.propTypes = {
    children: PropTypes.string.isRequired,
    component: PropTypes.string,
};
export default MarkdownBlock;
//# sourceMappingURL=index.js.map