var ReactDOM = require('react-dom')
var React = require('react')
var Checkbox = require('checkbox.react')
class Basic extends React.Component {
	constructor(props){
		super(props)
		this.state = {
            basicChecked: true,
            basicFalseChecked: false,
            basicTrueChecked: true,
		}
	}
    render () {
    	let self = this
        return (
            <div className="basicDemo" >
            	<label>
	                <Checkbox checked={self.state.basicChecked} 
		                onChange={function (e) {
	                        self.setState({
	                            basicChecked: e.target.checked
	                        })
	                    }}
	                />checked:{String(self.state.basicChecked)}
                </label>
                <hr/>
                <label>
	                <Checkbox checked={self.state.basicFalseChecked} 
		                onChange={function (e) {
	                        self.setState({
	                            basicFalseChecked: e.target.checked
	                        })
	                    }}
	                />checked:{String(self.state.basicFalseChecked)}
                </label>
                <br/>
                <label>
	                <Checkbox checked={self.state.basicTrueChecked} 
		                onChange={function (e) {
	                        self.setState({
	                            basicTrueChecked: e.target.checked
	                        })
	                    }}
	                />
	                checkbox<a href="http://github.com/onface" target="_blank" > link </a>
	                checked:{String(self.state.basicTrueChecked)}
                </label>
                <hr/>
                <label>
	                <Checkbox checked={true} disabled={true} />
	                disabled | checked:true
                </label>
                <hr/>
                <label>
	                <Checkbox checked={false} disabled={true} />
	                disabled | checked: false
                </label>
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
ReactDOM.render(
    <Basic />,
    document.getElementById('basic-demo')
)
