var React = require('react')
var Checkbox = require('checkbox.react')
class Basic extends React.Component {
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
            <div className="basicDemo" >
                <label>
                    <Checkbox checked={self.state.basicChecked} onChange={function (e) {
                            self.setState({
                                basicChecked: e.target.checked
                            })
                        }} />
                    checkbox
                </label>
                <hr/>
                <label>
                    <Checkbox checked={self.state.basicFalseChecked} onChange={function (e) {
                            self.setState({
                                basicFalseChecked: e.target.checked
                            })
                        }} />
                    checkbox
                </label>
                <hr/>
                <label>
                    <Checkbox checked={self.state.disabledChecked} disabled={true} onChange={function (e) {
                            self.setState({
                                disabledChecked: e.target.checked
                            })
                        }} />
                    disabled | checked:true
                </label>
                <hr/>
                <label>
                    <Checkbox checked={self.state.disabledFalseChecked} disabled={true} onChange={function (e) {
                            self.setState({
                                disabledChecked: e.target.checked
                            })
                        }} />
                    disabled | checked: false
                </label>
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic
