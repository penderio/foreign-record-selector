import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import ForeignRecordSelectorDemo from './ForeignRecordSelectorDemo'
import ForeignRecordSelectorDemo2 from './ForeignRecordSelectorDemo2'
import ForeignRecordSelectorDemo3 from './ForeignRecordSelectorDemo3'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${JSON.stringify(args, null, 2)}
    `)
}

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

class Demo extends Component {
    render() {
        return <div>
            <h1>ForeignRecordSelector Demo</h1>
            <p>
                Used for selecting a foreign record.
            </p>
            <h2>
                General
            </h2>
            <ForeignRecordSelectorDemo />
            <h2>
                Loading
            </h2>
            <ForeignRecordSelectorDemo2 />
            <h2>
                No matching records
            </h2>
            <ForeignRecordSelectorDemo3 />
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
