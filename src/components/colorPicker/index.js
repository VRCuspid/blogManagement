import React from 'react'
import { ChromePicker } from 'react-color'
import { Button } from 'antd'
import './index.scss'
class ColorPicker extends React.Component{
    constructor() {
        super()
        this.state = {
            showPicker: false,
        }
    }
    render() {
        let { color } = this.props
        let { showPicker } = this.state
        console.log(this.props)
        return <div className="colorPicker">
            <div className="color" onClick={this.tiggerShowPicker}>
                <div className="showColor" style={{background:color}}></div>
            </div>
            {
               showPicker && <div className="picker">
                    <ChromePicker color={color} onChange={this.colorChange} />
                    <div className="pickerFooter">
                        <Button type="primary" onClick={this.tiggerShowPicker}>确定</Button>
                    </div>
                </div>
            }
        </div>
    }

    colorChange = (e) => {
        this.props.onChange(e)
    }
    tiggerShowPicker = () => {
        let { showPicker } = this.state
        this.setState({ showPicker: !showPicker })
    }
}

export default ColorPicker