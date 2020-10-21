import React from 'react'
import './Taglist.scss'
import { Table,Row,Col,Input,Button,Modal,message } from 'antd'
import {getActicleList,delActicle} from '@/api/acticle'
class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: [],
      columns: [
        {
          title: '标签名称',
          dataIndex: 'tag_name',
          key: 1
        },{
          title: '标签颜色',
          dataIndex: 'tag_color',
          key: 2
        },{
          title: '创建时间',
          dataIndex: 'create_time',
          key: 3
        },{
          title: '更新时间',
          dataIndex: 'update_time',
          key: 4
        },{
          title:'操作',
          key:7,
          render:(item) => {
            return <div>
              <span onClick={()=>this.updateTag(item)} className="primary">修改</span>
              <span onClick={()=>this.delTag(item)} className="danger">删除</span>
            </div>
          }
        }
      ],
      pagination:{
        current: 1,
        pageSize: 10,
        total: 20
      },
    }
  }
  componentDidMount() {
    this.getActicleList()
  }
  render () {
    const {columns,dataSource,pagination} = this.state
    return <div className="wrapper router-container">
      <div className="query-form">
        <Row key="23" gutter={10}>
          <Col span={4}>
            <Input placeholder="文章标题"></Input>
          </Col>
          <Col span={4}>
            <Input placeholder="文章标题"></Input>
          </Col>
          <Col span={4}>
            <Input placeholder="文章标题"></Input>
          </Col>
          <Col span={4}>
            <Input placeholder="文章标题"></Input>
          </Col>
          <Col span={4}>
            <Input placeholder="文章标题"></Input>
          </Col>
          <Col span={4}>
            <Button className="m-right20" type="primary">查询</Button>
            <Button type="danger">重置</Button>
          </Col>
        </Row>
        <div className="btn-group">
          <Button onClick={this.addArticle} type="primary">新增</Button>
        </div>
        <Table bordered onChange={this.tableChange} pagination={pagination} columns={columns} dataSource={dataSource}></Table>
      </div>
    </div>
  }
  delTag = ({id}) => {
    // delActicle
    var _t = this
    Modal.confirm({
      title:'提示',
      content:'是否确定删除?',
      onOk() {
        delActicle({id}).then(response=>{
          if(response.res) {
            message.success(response.msg)
            _t.getActicleList()
          }
        })
      }
    })
  }
  tableChange = (pagination) => {
    console.log(pagination)
    this.setState({
      pagination:{
        ...pagination
      }
    },()=>{
      this.getActicleList()
    })
  }
  getActicleList = () => {
    const {current,pageSize} = this.state.pagination
    getActicleList({page:current-1,size:pageSize}).then(res=>{
      console.log(res)
      if (res.res) {
        this.setState({
          dataSource: res.data.rows.map(item=>({...item,key:item.id})),
          pagination:{...this.state.pagination,total:res.data.total}
        })
      }
    })
  }
  addArticle = () => {
    this.props.history.push('/tag/Tagadd')
  }

  updateTag = (item) => {
    const { id } = item
    this.props.history.push('/tag/tagEditor?id='+id)
  }
}

export default Home