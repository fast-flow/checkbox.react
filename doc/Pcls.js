var React = require('react')
var Checkbox = require('checkbox.react')

// 引入复制后修改样式
import './pcls.demo.less/index.less';
class MyCheckbox extends React.Component {
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
            pclsFlaseChecked: false,
            disabledChecked: true,
            disabledFalseChecked: false
		}
	}
    render () {
    	let self = this
        return (
            <div className="pclsDemo" >
                <MyCheckbox checked={self.state.pclsChecked} onChange={function (e) {
                        self.setState({
                            pclsChecked: e.target.checked
                        })
                    }} >checkbox</MyCheckbox>
                <hr/>
                <MyCheckbox checked={self.state.pclsFalseChecked} onChange={function (e) {
                        self.setState({
                            pclsFalseChecked: e.target.checked
                        })
                    }} >checkbox</MyCheckbox>
                <hr/>
                <MyCheckbox checked={self.state.disabledChecked} disabled={true} onChange={function (e) {
                        self.setState({
                            disabledChecked: e.target.checked
                        })
                    }} >disabled | checked:true</MyCheckbox>
                <hr/>
                <MyCheckbox checked={self.state.disabledFalseChecked} disabled={true} onChange={function (e) {
                        self.setState({
                            disabledChecked: e.target.checked
                        })
                    }} >disabled | checked: false</MyCheckbox>
            </div>
        )
    }
}
/*ONFACE-DEL*/Pcls = require("react-hot-loader").hot(module)(Pcls)
module.exports = Pcls
