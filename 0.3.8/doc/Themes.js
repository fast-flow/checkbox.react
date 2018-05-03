var React = require('react')
var Checkbox = require('checkbox.react')

// 引入复制后修改样式
import './themes.demo.less/index.less';
class MyCheckbox extends React.Component {
    render () {
        return (
            <Checkbox themes="green" {...this.props} prefixClassName="mycheckbox" />
        )
    }
}


class Themes extends React.Component {
	constructor(props){
		super(props)
		this.state = {
            basicChecked: true,
            basicFlaseChecked: false,
            disabledChecked: true,
            disabledFalseChecked: false
		}
	}
    render () {
    	let self = this
        return (
            <div className="themesDemo" >
                <MyCheckbox checked={self.state.basicChecked} onChange={function (e) {
                        self.setState({
                            basicChecked: e.target.checked
                        })
                    }} >checkbox</MyCheckbox>
                <hr/>
                <MyCheckbox checked={self.state.basicFalseChecked} onChange={function (e) {
                        self.setState({
                            basicFalseChecked: e.target.checked
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
/*ONFACE-DEL*/Themes = require("react-hot-loader").hot(module)(Themes)
module.exports = Themes
