import React from 'react'
import './index.scss'
import { Table,Row,Col,Input,Button } from 'antd'
class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: [{ test: 'test',key:12 }],
      columns: [
        {
          title: '标题',
          dataIndex: 'test',
          key: 1
        },{
          title:'操作',
          key:2,
          render() {
            return <div>
              <span className="primary">修改</span>
              <span className="danger">删除</span>
            </div>
          }
        }
      ],
      pagination:{
        current: 1,
        pageSize: 10,
        total: 20
      }
    }
  }
  render () {
    const {columns,dataSource,pagination} = this.state
    return <div className="articlelist-container">
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
            <Button type="primary">查询</Button>
            <Button type="danger">重置</Button>
          </Col>
        </Row>
        <div className="btn-group">
          <Button type="primary">新增</Button>
        </div>
        <Table onChange={this.tableChange} pagination={pagination} columns={columns} dataSource={dataSource}></Table>
      </div>
    </div>
  }

  tableChange = (pagination) => {
    console.log(pagination)
    this.setState({
      pagination
    })
  }
}

export default Home