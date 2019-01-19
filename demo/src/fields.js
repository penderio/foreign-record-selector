export default [{
    id: 'fld1',
    name: 'Name',
    typeId: 'singleLineText'
}, {
    id: 'fld2',
    name: 'Published',
    typeId: 'checkbox'
}, {
    id: 'fld3',
    name: 'Attachments',
    typeId: 'attachment'
}, {
    id: 'fld4',
    name: 'Revenue',
    typeId: 'number',
    options: {
        numberFormatId: 'decimal',
        allowNegativeNumbers: false,
        precisionId: '2'
    }
}, {
    id: 'fld5',
    name: 'Squad',
    typeId: 'linkToAnotherRecord'
}, {
    id: 'fld6',
    name: 'Colors',
    typeId: 'multipleSelect',
    options: {
        coloredOptions: true,
        optionOrder: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6'],
        options: {
            'opt1': {
                id: 'opt1',
                colorId: 'blue.base',
                name: 'Blue'
            },
            'opt2': {
                id: 'opt2',
                colorId: 'green.base',
                name: 'Green'
            },
            'opt3': {
                id: 'opt3',
                colorId: 'red.base',
                name: 'Red'
            },
            'opt4': {
                id: 'opt4',
                colorId: 'yellow.base',
                name: 'Yellow'
            },
            'opt5': {
                id: 'opt5',
                colorId: 'indigo.base',
                name: 'Indigo'
            },
            'opt6': {
                id: 'opt6',
                colorId: 'purple.base',
                name: 'Purple'
            }
        }
    }
}, {
    id: 'fld7',
    name: 'Color',
    typeId: 'singleSelect',
    options: {
        coloredOptions: true,
        optionOrder: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6'],
        options: {
            'opt1': {
                id: 'opt1',
                colorId: 'blue.base',
                name: 'Blue'
            },
            'opt2': {
                id: 'opt2',
                colorId: 'green.base',
                name: 'Green'
            },
            'opt3': {
                id: 'opt3',
                colorId: 'red.base',
                name: 'Red'
            },
            'opt4': {
                id: 'opt4',
                colorId: 'yellow.base',
                name: 'Yellow'
            },
            'opt5': {
                id: 'opt5',
                colorId: 'indigo.base',
                name: 'Indigo'
            },
            'opt6': {
                id: 'opt6',
                colorId: 'purple.base',
                name: 'Purple'
            }
        }
    }
}, {
    id: 'fld8',
    name: 'Notes',
    typeId: 'longText'
}, {
    id: 'fld9',
    name: 'Description',
    typeId: 'singleLineText'
}, {
    id: 'fld10',
    name: 'Attachments',
    typeId: 'attachment'
}]
