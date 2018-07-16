var ReactDOM = require('react-dom')
var React = require('react')
var Checkbox = require('checkbox.react')

// 引入复制后修改样式
import './themes.demo.less';
class MyCheckbox extends React.Component {
    render () {
        return (
            <Checkbox themes="red" {...this.props} />
        )
    }
}


class Themes extends React.Component {
	constructor(props){
		super(props)
		this.state = {
            basicChecked: true,
            basicFalseChecked: false,
		}
	}
    render () {
    	let self = this
        return (
            <div className="themesDemo" >
                <label>    
                    <MyCheckbox checked={self.state.basicChecked} 
                        onChange={function (e) {
                            self.setState({
                                basicChecked: e.target.checked
                            })
                        }} 
                    />MyCheckbox | checked:{String(self.state.basicChecked)}
                </label>
                <hr/>
                <label>            
                    <MyCheckbox checked={self.state.basicFalseChecked} 
                        onChange={function (e) {
                            self.setState({
                                basicFalseChecked: e.target.checked
                            })
                        }} 
                    />MyCheckbox | checked:{String(self.state.basicFalseChecked)}
                </label>
                <hr/>
                <label>            
                    <MyCheckbox checked={true} disabled={true} />
                    disabled | checked:true
                </label>
                <hr/>
                <label>            
                    <MyCheckbox checked={false} disabled={true} />
                    disabled | checked: false
                </label>
            </div>
        )
    }
}
/*ONFACE-DEL*/Themes = require("react-hot-loader").hot(module)(Themes)

ReactDOM.render(
    <Themes />,
    document.getElementById('themes-demo')
)
