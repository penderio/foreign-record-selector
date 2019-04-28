import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import ForeignRecordSelectorDemo from './ForeignRecordSelectorDemo'
import ForeignRecordSelectorDemo2 from './ForeignRecordSelectorDemo2'
import ForeignRecordSelectorDemo3 from './ForeignRecordSelectorDemo3'
import {Canvas, Heading, Paragraph, Box} from '@cmds/demo-utils'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${JSON.stringify(args, null, 2)}
    `)
}


class Demo extends Component {
    render() {
        return <Canvas>
            <Heading>
                General
            </Heading>
            <Box>
                <ForeignRecordSelectorDemo />
            </Box>
            <Heading>
                Loading
            </Heading>
            <Box>
                <ForeignRecordSelectorDemo2 />
            </Box>
            <Heading>
                No matching records
            </Heading>
            <Box>
                <ForeignRecordSelectorDemo3 />
            </Box>
        </Canvas>
    }
}

render(<Demo/>, document.querySelector('#demo'))
