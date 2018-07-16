var ReactDOM = require('react-dom')
var React = require('react')
var Checkbox = require('checkbox.react')

// 引入复制后修改样式
import './pcls.demo.less/index.less';
class CustomCheckbox extends React.Component {
    render () {
        return (
            <Checkbox themes="green" {...this.props} prefixClassName="mycheckbox" />
        )
    }
}


class Pcls extends React.Component {
	constructor(props){
		super(props)
		this.state = {
            pclsChecked: true,
            pclsFalseChecked: false,
		}
	}
    render () {
    	let self = this
        return (
            <div className="pclsDemo" >
                <label>
                    <CustomCheckbox checked={self.state.pclsChecked}
                        onChange={function (e) {
                            self.setState({
                                pclsChecked: e.target.checked
                            })
                        }} 
                    />checked:{String(self.state.pclsChecked)}
                </label>
                <hr/>
                <label>
                    <CustomCheckbox checked={self.state.pclsFalseChecked}
                        onChange={function (e) {
                            self.setState({
                                pclsFalseChecked: e.target.checked
                            })
                        }} 
                    />checked:{String(self.state.pclsFalseChecked)}
                </label>
                <hr/>
                <label>
                    <CustomCheckbox checked={true} disabled={true} />
                    disabled | checked:true
                </label>
                <hr/>
                <label>
                    <CustomCheckbox checked={false} disabled={true} />
                    disabled | checked: false
                </label>
            </div>
        )
    }
}
/*ONFACE-DEL*/Pcls = require("react-hot-loader").hot(module)(Pcls)

ReactDOM.render(
    <Pcls />,
    document.getElementById('pcls-demo')
)
