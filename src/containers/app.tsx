import * as React from 'react'
import Test from '../components/test'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/actions'

class App extends React.Component<{}> {

  render() {
    return (
      <div>
        <Test></Test>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
