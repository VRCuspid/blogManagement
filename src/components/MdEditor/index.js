import React from 'react'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import 'react-markdown-editor-lite/lib/index.css';

class Editor extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.mdParser = new MarkdownIt(/* Markdown-it options */)
    }
    render() {
        let { text,style={height:500},onChange } = this.props
        console.log(this.props)
        return <MdEditor
            value={text}
            style={style}
            renderHTML={(text) => this.mdParser.render(text)}
            onChange={onChange} 
        /> 
    }
}

export default Editor