import React from 'react'
import fieldRenderer from "./fieldRenderer";
import fields from "./fields";
import RecordListItem from '@cmds/record-list-item'

const recordRenderer = ({id, onClick}) => (
    <RecordListItem
        id={'rec1'}
        name={'Luke Skywalker'}
        fields={fields}
        visibleFieldOrder={['fld1', 'fld2', 'fld4', 'fld5', 'fld6', 'fld7', 'fld8', 'fld9']}
        fieldRenderer={fieldRenderer}
        onClick={onClick}
    />
)

export default recordRenderer