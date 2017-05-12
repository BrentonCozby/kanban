import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAllColumns } from '../actions/index.js'
import Column from './Column.jsx'

class ColumnsContainer extends Component {

    componentWillMount() {
        this.props.getAllColumns()
    }

    componentDidUpdate() {
        if(this.props.allColumns.length > 0) {
            localStorage.setItem(
                'columns',
                JSON.stringify(this.props.allColumns)
            )
        }
    }

    render() {
        const { allColumns, addCard } = this.props
        return (
            <div className="columns-container">
                {allColumns && allColumns.map(column => (
                    <Column
                        id={column.id}
                        key={column.id}
                        name={column.name}
                        cards={column.cards}
                        color={column.color}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allColumns: state.columns.all
    }
}

export default connect(
    mapStateToProps,
    {
        getAllColumns,
    }
)(ColumnsContainer)
