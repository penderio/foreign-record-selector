import React from 'react'
import {css} from 'emotion'
import ForeignRecordSelector from '../../src'
import recordRenderer from './recordRenderer'

export default class ForeignRecordSelectorDemo extends React.Component {

    state = {
        query: '',
        records: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }

    render() {

        return (
            <div
                className={css`
                    position: relative;
                    height: 800px;
                `}
            >
                <ForeignRecordSelector
                    id={'frs1'}
                    records={this.state.records}
                    query={this.state.query}
                    loading={false}
                    noResults={false}
                    createRecordName={this.state.query}
                    onQueryChange={this.handleQueryChange}
                    onCreateRecordClick={() => alert('onCreateRecordClick')}
                    onCloseClick={() => alert('onCloseClick')}
                    onSelect={({id}) => alert('onSelect: ' + id)}
                    recordRenderer={recordRenderer}
                />
            </div>
        )
    }

    handleQueryChange = ({query}) => {

        this.setState({
            query
        })
    }
}