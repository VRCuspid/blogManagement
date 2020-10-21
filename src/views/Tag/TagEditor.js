import React from 'react'
import { Form,Input,Button,message,Tag } from 'antd'
import {addArticle,getActicleDetail,updateActicle} from '@/api/acticle'
import { getQueryObj } from '@/utils'
// import { ChromePicker } from 'react-color'
import ColorPicker from '@/components/colorPicker'
import "easymde/dist/easymde.min.css";
import './TagEditor.scss'
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18, offset: 1 },
  };

const { TextArea } = Input
class ArticleAdd extends React.Component  {
    constructor() {
        super()
        this.state = {
            tag_color:'',
            tag_name:''
        }
    }
    componentDidMount() {
        this.getEditorData()
    }
    render() {
        const { getFieldDecorator,getFieldValue } = this.props.form
        return <div className="wrapper form-content">
            <Form {...formTailLayout}  size="middle">
                <Form.Item name="tag_name" label="标签名称">
                    {
                        getFieldDecorator('tag_name',{
                            rules: [
                                { required: true, message:'请填写标签名称' }
                            ]
                        })(
                            <Input onChange={this.nameChange}></Input>
                        )
                    }
                </Form.Item>
                <Form.Item name="tag_color" label="标签颜色">
                    {
                        getFieldDecorator('tag_color',{
                            rules: [
                                { required: true, message:'请选择标签颜色' }
                            ]
                        })(
                            <ColorPicker color={this.state.tag_color} onChange={this.colorChange} />
                            // <ChromePicker color={this.state.tag_color} onChange={this.colorChange} />
                        )
                    }
                </Form.Item>
                <Form.Item label="标签实例">
                    <Tag color={this.state.tag_color}>
                        { this.state.tag_name || '标签' }
                    </Tag>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button className="m-right20" onClick={this.save} type="primary" htmlType="submit" >保存</Button>
                    <Button onClick={this.back} type="primary" htmlType="submit" >返回</Button>
                </Form.Item>
            </Form>
        </div>
    }
    back = () => {
        this.props.history.goBack()
    }
    save = () => {
        const query = getQueryObj(this.props.location.search)
        const { isEdit,id } = query
        this.props.form.validateFields().then(res=>{
            // const converter = new showdown.Converter()
            const act_detail = res.act_detail
            isEdit ? 
            this.updateActicle({...res,act_detail,id}) : 
            this.addArticle({...res,act_detail})
        }).catch(error=>{
            console.log(error)
        })
    }
    colorChange = (e) => {
        this.setState({
            tag_color:e.hex
        })
    }
    nameChange = (e) => {
        this.setState({
            tag_name: e.target.value
        })
    }
    updateActicle(parmars) {
        updateActicle(parmars).then(response=>{
            if (response.res) {
                message.success(response.msg)
                this.props.history.goBack()
            }
        })
    }
    addArticle(parmars) {
        addArticle(parmars).then(response=>{
            console.log(response)
            if (response.res) {
                message.success(response.msg)
                this.props.history.goBack()
            }
        })
    }

    handleChange = (e) => {
        this.setState({main_content:e})
    }
    getInsance = (ins) => {
        this.setState({ins})
    }
    getEditorData() {
        const query = getQueryObj(this.props.location.search)
        const { isEdit,id } = query
        if(!isEdit) {
            return
        }
        getActicleDetail({id}).then(res=>{
            console.log(res)
            if (res.res) {
                this.props.form.setFieldsValue(res.data)
            }
        })
    }
}

export default Form.create({ name:'article_add' })(ArticleAdd)