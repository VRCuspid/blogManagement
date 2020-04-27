import React from 'react'
import './App.css'
import './common/common.scss'
import RouterView,{RouterConfig as routes} from '@/router'
import {withRouter} from 'react-router'
class App extends React.Component {
  render () {
    return <div className="App">
      <RouterView routes={routes} />
    </div>
  }
}
export default withRouter(App)
