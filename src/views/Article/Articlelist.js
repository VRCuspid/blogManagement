import React from 'react'
import './Articlelist.scss'
import { Table, Row, Col, Input, Button, Modal, message, Form } from 'antd'
import { getActicleList, delActicle } from '@/api/acticle'
class Home extends React.Component {
  state = {
    dataSource: [],
    columns: [
      {
        title: '标题',
        dataIndex: 'act_title',
        key: 1
      }, {
        title: '梗概',
        dataIndex: 'main_content',
        key: 2
      }, {
        title: '喜欢',
        dataIndex: 'likes',
        key: 6
      }, {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 3
      }, {
        title: '更新时间',
        dataIndex: 'update_time',
        key: 4
      }, {
        title: '操作',
        key: 7,
        render: (item) => {
          return <div>
            <span onClick={() => this.updateArticle(item)} className="primary">修改</span>
            <span onClick={() => this.delArticle(item)} className="danger">删除</span>
          </div>
        }
      }
    ],
    pagination: {
      current: 1,
      pageSize: 10,
      total: 20
    },
  }
  componentDidMount() {
    this.getActicleList()
  }

  tableChange = (pagination) => {
    console.log(pagination)
    this.setState({
      pagination: {
        ...pagination
      }
    }, () => {
      this.getActicleList()
    })
  }
  getActicleList = () => {
    const { pagination: { current, pageSize }, act_title } = this.state
    getActicleList({ page: current - 1, size: pageSize, act_title }).then(res => {
      console.log(res)
      if (res.res) {
        this.setState({
          dataSource: res.data.rows.map(item => ({ ...item, key: item.id })),
          pagination: { ...this.state.pagination, total: res.data.total }
        })
      }
    })
  }
  addArticle = () => {
    this.props.history.push('/article/Articleadd')
  }

  updateArticle = (item) => {
    const { id } = item
    this.props.history.push('/article/Articleedit?id=' + id)
  }
  delArticle = ({ id }) => {
    var _t = this
    Modal.confirm({
      title: '提示',
      content: '是否确定删除?',
      onOk() {
        delActicle({ id }).then(response => {
          if (response.res) {
            message.success(response.msg)
            _t.getActicleList()
          }
        })
      }
    })
  }

  render() {
    const { columns, dataSource, pagination, act_title } = this.state
    return <div className="articlelist-container router-container">
      <div className="query-form">
        <Row key="23" gutter={10}>
          <Col span={4}>
            <Input value={act_title} onChange={(e) => {
              this.setState({
                act_title: e.target.value
              })
            }} placeholder="文章标题"></Input>
          </Col>
          <Col span={4}>
            <Button onClick={this.getActicleList} className="m-right20" type="primary">查询</Button>
            <Button onClick={() => {
              this.setState({
                act_title: ''
              }, () => {
                this.getActicleList()
              })
            }} type="danger">重置</Button>
          </Col>
        </Row>
        <div className="btn-group">
          <Button onClick={this.addArticle} type="primary">新增</Button>
        </div>
        <Table bordered onChange={this.tableChange} pagination={pagination} columns={columns} dataSource={dataSource}></Table>
      </div>
    </div>
  }
}

export default Home