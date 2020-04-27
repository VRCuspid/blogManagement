import React from 'react'
import RouterConfig from './router.config.js'
import { Switch, Route, withRouter } from 'react-router-dom'
class RouterView extends React.Component {
  render () {
    const {routes} = this.props
    return <Switch>
      {
        routes.map(item=>{
          return <Route
            exact={item.exact}
            key={item.path}
            path={item.path}
            render={
              (props)=> <item.component {...props} routes={item.child}></item.component>
            }
          />
        })
      }
    </Switch>
  }
}
export {
  RouterConfig
}

export default withRouter(RouterView)