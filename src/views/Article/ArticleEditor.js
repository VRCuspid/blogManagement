import React from 'react'
import { Form,Input,Button,message } from 'antd'
import SimpleMDE from "react-simplemde-editor";
import {addArticle,getActicleDetail,updateActicle} from '@/api/acticle'
import showdown from 'showdown'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import { getQueryObj } from '@/utils'
// import "easymde/dist/easymde.min.css";
import './ArticleEditor.scss'
import 'react-markdown-editor-lite/lib/index.css';
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18, offset: 1 },
  };

const { TextArea } = Input
class ArticleAdd extends React.Component  {
    constructor() {
        super()
        this.state = {
            textValue: 23,
            act_detail:'',
            ins:null,
        }
        this.mdParser = new MarkdownIt(/* Markdown-it options */)
    }
    componentDidMount() {
        this.getEditorData()
    }
    render() {
        const toolbar = [
            'bold',
            'italic',
            'heading',
            '|',
            'quote',
            'code',
            'table',
            'horizontal-rule',
            'unordered-list',
            'ordered-list',
            '|',
            'link',
            'image',
            '|',
            'side-by-side',
            'fullscreen',
        ]
        const { getFieldDecorator } = this.props.form
        let { act_detail } = this.state
        return <div className="wrapper form-content">
            <Form {...formTailLayout}  size="middle">
                <Form.Item name="act_title" label="文章标题">
                    {
                        getFieldDecorator('act_title',{
                            rules: [
                                { required: true, message:'请填写标题' }
                            ]
                        })(
                            <Input></Input>
                        )
                    }
                </Form.Item>
                <Form.Item name="main_content" label="文章梗概">
                    {
                        getFieldDecorator('main_content',{
                            rules: [
                                { required: true, message:'请填写梗概' }
                            ]
                        })(
                            <TextArea rows={4}></TextArea>
                        )
                    }
                </Form.Item>

                <Form.Item name="act_detail" label="文章内容">
                {/* {
                        getFieldDecorator('act_detail',{
                            rules: [
                                { required: true, message:'请填写文章内容' }
                            ]
                        })(
                            
                              
                        )
                    } */}
                    {/* <SimpleMDE onChange={this.handleChange} />; */}
                    {/* <SimpleMDE
                            id="your-custom-id"
                            getMdeInstance= { this.getInsance }
                            onChange={this.handleChange}
                            // toolbar={toolbar}
                            // options={{
                            //     toolbar
                            // }}
                        /> */}
                        <MdEditor
                            // value={act_detail}
                            style={{height:400}}
                            renderHTML={(text) => this.mdParser.render(text)}
                            onChange={this.handleEditorChange} 
                        /> 
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
        const { id } = query
        this.props.form.validateFields().then(res=>{
            // const converter = new showdown.Converter()
            const act_detail = res.act_detail
            id ? 
            this.updateActicle({...res,act_detail,id}) : 
            this.addArticle({...res,act_detail})
        }).catch(error=>{
            console.log(error)
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
    handleEditorChange = (e) => {    
        console.log('handleEditorChange', e)
        this.setState({
            act_detail:e.text
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
        this.setState({act_detail:e})
    }
    getInsance = (ins) => {
        this.setState({ins})
    }
    getEditorData() {
        const query = getQueryObj(this.props.location.search)
        const { id } = query
        if(!id) {
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