import React from 'react'
import './index.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll((err,values)=>{
      if(err) return false;
      console.log(values)
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return <div className="layout_container">
      <div className="logo">
        <div className="login_form">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请填写用户名' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请填写密码' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>保持登录</Checkbox>)}
              <Button type="primary" htmlType="submit" className="login_form_btn">
                登录
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