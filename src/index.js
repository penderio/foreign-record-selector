import React from 'react'
import PropTypes from 'prop-types'
import icons from './icons'
import { css } from 'emotion'
import Button from '@pndr/button'
import plus from '@pndr/icons/lib/plus'
import spinner from '@pndr/spinner'

const TextBody = ({ children }) => (
    <div
        className={css`
            position: absolute;
            top: 60px;
            bottom: 60px;
            left: 0;
            right: 0;
            color: #9fa0a5;
            display: flex;
            align-items: center;
            justify-content: center;
        `}
    >
        {children}
    </div>
)

export default class ForeignRecordSelector extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        query: PropTypes.string,
        loading: PropTypes.bool.isRequired,
        noResults: PropTypes.bool.isRequired,
        createRecordName: PropTypes.string,
        records: PropTypes.arrayOf(PropTypes.any.isRequired),
        onQueryChange: PropTypes.func,
        onCreateRecordClick: PropTypes.func,
        onCloseClick: PropTypes.func,
        onSelect: PropTypes.func,
        recordRenderer: PropTypes.func,
    }

    render() {

        return (
            <div
                className={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #fff;
                `}
            >
                <div
                    className={css`
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            height: 60px;
                            background-color: #fff;
                        `}
                >
                    <div
                        className={css`
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                right: 60px;
                                left: 0;
                                padding-left: 60px;
                            `}
                    >
                        <div
                            className={css`
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 60px;
                                    height: 60px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                `}
                        >
                            {icons.search({ size: 16 })}
                        </div>
                        <input
                            className={css`
                                    width: 100%;
                                    height: 100%;
                                    border: none;
                                    font-size: 16px;
                                    &:focus {
                                        outline: none;
                                    }
                                `}
                            type="text"
                            placeholder="Find an existing record"
                            value={this.props.query}
                            onChange={this.handleQueryChange}
                        />
                    </div>
                    <button
                        type="button"
                        className={css`
                                position: absolute;
                                right: 0;
                                top: 0;
                                height: 60px;
                                width: 60px;
                                background: none;
                                border: none;
                            `}
                        onClick={this.handleCloseClick}
                    >
                        {icons.close({ size: 16 })}
                    </button>
                </div>
                <div
                    className={css`
                            position: absolute;
                            top: 60px;
                            bottom: 60px;
                            left: 0;
                            right: 0;
                            padding: 24px 0;
                            overflow-x: hidden;
                            overflow-y: scroll;
                            -webkit-overflow-scrolling: touch;
                        `}
                >
                    {this.props.noResults ? (
                        <TextBody>
                            No matching records.
                        </TextBody>
                    ) : this.props.loading ? (
                        <TextBody>
                            <div
                                className={css`
                                    display: flex;
                                    align-items: center;
                                `}
                            >
                                <div
                                    className={css`
                                        display: flex;
                                        margin-right: 8px;
                                    `}
                                >
                                    {spinner({
                                        width: 16
                                    })}
                                </div>
                                <div>
                                    Loading...
                                </div>
                            </div>
                        </TextBody>
                    ) : null}
                    {!this.props.loading && !this.props.noResults ? this.props.records.map(id => (
                        <div
                            key={id}
                            className={css`
                                    position: relative;
                                    padding-left: 16px;
                                    padding-right: 16px;
                                    margin-bottom: 24px;
                                    &:last-of-type {
                                        margin-bottom: 0;
                                    }
                                `}
                        >
                            {this.props.recordRenderer({
                                id,
                                onClick: this.handleSelect
                            })}
                        </div>
                    )) : null}
                </div>
                <div
                    className={css`
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            left: 0;
                            height: 60px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fff;
                        `}
                >
                    <Button
                        size={'sm'}
                        type="button"
                        icon={plus}
                        onClick={this.handleCreateRecordClick}
                    >
                        Add new record{this.props.createRecordName ? ` named "${this.props.createRecordName}"` : ''}
                    </Button>
                </div>
            </div>
        )
    }

    handleQueryChange = e => {

        this.props.onQueryChange({
            query: e.target.value
        })
    }

    handleSelect = ({ e, id }) => {

        if (this.props.onSelect) {
            this.props.onSelect({
                id,
                e
            })
        }
    }

    handleCreateRecordClick = e => {

        this.props.onCreateRecordClick({
            e
        })
    }

    handleCloseClick = e => {

        this.props.onCloseClick({
            e
        })
    }
}