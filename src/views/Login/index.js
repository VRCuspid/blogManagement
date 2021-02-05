import React from 'react'
import './index.css'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import { getCode,login } from '@/api/auth'
import { setToken } from '@/utils/auth'
@Form.create()
class Login extends React.Component {
  state = {
    svg: '',
    code: ''
  }
  componentDidMount() {
    this.getCode()
  }

  getCode = () => {
    getCode().then(res => {
      if (res.res) {
        const { svg, code } = res.data
        this.setState({
          svg,
          code
        })
      }
    })
  }

  login = (params) => {
    login(params).then(res=>{
      console.log(res)
      if(res.res) {
        message.success(res.msg)
        setToken(res.data.token)
        this.props.history.push('/')
      } else {
        message.error(res.msg)
      }
    })
  }
  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) return false;
      console.log(values)
      this.login(values)
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { svg, code } = this.state

    const testCod = function (rule, value, ck) {
      const CODE = code.toUpperCase()
      const VALUE = value.toUpperCase()
      if(CODE !== VALUE && value) {
        ck('验证码错误')
      }
      ck()
    }
    return <div className="layout_container">
      <div className="logo">
        <div className="login_form">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('user_name', {
                rules: [{ required: true, message: '请填写用户名' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('user_pwd', {
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
              <div className="login_form_codeblank">
                <div className="login_form_code" onClick={this.getCode} dangerouslySetInnerHTML={{ __html: svg }}></div>
                {getFieldDecorator('code', {
                  rules: [{ required: true, message: '请填写验证码' }, { validator: testCod }]
                })(
                  <Input
                    style={{ width: 100 }}
                    placeholder="验证码"
                  />
                )}
              </div>
            </Form.Item>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" className="login_form_btn">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  }
}
export default Login