import * as React from 'react'
import * as s from './style.css'

interface ColumnProps {
    column: object
    onAddCard: object
    onDeleteColumn: object
    onDeleteCard: object
}

class Column extends React.Component<ColumnProps, {}> {
  render() {
    return (
      <div>
        column
      </div>
    )
  }
}

export default Column
