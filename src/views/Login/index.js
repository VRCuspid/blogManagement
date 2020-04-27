import React from 'react'
import './index.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return <div className="layout_container">
      <div className="logo">
        <div className="login_form">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <Button type="primary" htmlType="submit" className="login_form_btn">
            Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login)
export default WrappedNormalLoginForm