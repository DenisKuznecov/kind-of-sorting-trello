import * as React from 'react'
import ColumnList from '../components/column-list/columnList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/actions'

class App extends React.Component<{}> {

  render() {
    return (
      <ColumnList {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  columns: state.columns
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
