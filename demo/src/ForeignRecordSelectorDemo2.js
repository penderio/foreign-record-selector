import React from 'react'
import {css} from 'emotion'
import ForeignRecordSelector from '../../src'
import recordRenderer from './recordRenderer'

export default class ForeignRecordSelectorDemo2 extends React.Component {

    state = {
        query: '',
        records: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }

    render() {

        return (
            <div>
                <div
                    className={css`
                        width: 600px;
                        height: 760px;
                        border: 1px solid;
                        position: relative;
                    `}
                >
                    <ForeignRecordSelector
                        id={'frs2'}
                        records={this.state.records}
                        query={this.state.query}
                        loading={true}
                        noResults={false}
                        createRecordName={this.state.query}
                        onQueryChange={this.handleQueryChange}
                        onCreateRecordClick={() => alert('onCreateRecordClick')}
                        onCloseClick={() => alert('onCloseClick')}
                        onSelect={({id}) => alert('onSelect: ' + id)}
                        recordRenderer={recordRenderer}
                    />
                </div>
            </div>
        )
    }

    handleQueryChange = ({query}) => {

        this.setState({
            query
        })
    }
}