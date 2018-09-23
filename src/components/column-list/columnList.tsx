import * as React from 'react'
import PropTypes from 'prop-types'
import Column from './../column/column'
import AddColumn from './../add-column/addColumn'

interface ColumnListProps {
    addColumn: object
    addCard: object
    deleteColumn: object
    deleteCard: object
    columns: []
}

class ColumnList extends React.Component<ColumnListProps, {}> {
    render() {
        return (
            <>
                {
                    this.props.columns.map((column) => {
                        return (
                            <Column
                                column={column}
                                key={column.id}
                                onAddCard={this.props.addCard}
                                onDeleteColumn={this.props.deleteColumn}
                                onDeleteCard={this.props.deleteCard}
                            />
                        )
                    })
                }
                <AddColumn
                    onAddColumn={this.props.addColumn}
                />
            </>
        )
    }
}

// ColumnList.propTypes = {
//   addCard: PropTypes.func.isRequired,
//   deleteColumn: PropTypes.func.isRequired,
//   deleteCard: PropTypes.func.isRequired,
//   addColumn: PropTypes.func.isRequired
// }

export default ColumnList
