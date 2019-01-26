# ForeignRecordSelector

[![Greenkeeper badge](https://badges.greenkeeper.io/entercosmos/foreign-record-selector.svg)](https://greenkeeper.io/)

[![npm package][npm-badge]][npm]

Used for selecting a foreign record.	

## Getting started

````
npm install @cmds/foreign-record-selector --save
````

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this foreign record selector |
| query | String | | Search query to display inside the input |
| loading | Boolean | ✓ | Displays loading indicator instead of the results |
| noResults | Boolean | ✓ | Displays 'No matching records.' instead of the results |
| records | Array | ✓ | An array of record ids |
| createRecordName | Array |  | The name of the record created when the create new record button is click |
| onQueryChange | Function | ✓ | Triggers when the user updates the search query input: `({query: string})` |
| onCreateRecordClick | Function | ✓ | Triggers when the user clicks on the create new record button: `({e: ClickEvent})` |
| onCloseClick | Function | ✓ | Triggers when the user clicks on the close button: `({e: ClickEvent})` |
| onSelect | Function | ✓ | Triggers when the user clicks on one of the records displayed in the results: `({id: string, e: ClickEvent})` |
| recordRenderer | Function | ✓ | Responsible for rendering a record given the id to be displayed in the results: `({id: string, onClick: Function})` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/foreign-record-selector.svg
[npm]: https://www.npmjs.org/package/@cmds/foreign-record-selector
