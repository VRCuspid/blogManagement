import React from 'react'
import { LogoutOutlined } from '@ant-design/icons'
import style from './Header.module.scss'
import { removeUpToken } from '@/utils/auth'
import { withRouter } from 'react-router'
class Header extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return <div className={style.header}>
            <div onClick={this.loginOut} className={style.headerModule}>
                <LogoutOutlined />
            </div>
        </div>
    }

    loginOut = () => {
        removeUpToken()
        this.props.history.push('/login')
    }
}

export default withRouter( Header )