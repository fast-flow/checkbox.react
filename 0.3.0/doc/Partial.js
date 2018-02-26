var React = require('react')
var Checkbox = require('checkbox.react')
class Partial extends React.Component {
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
                    <Checkbox 
                        themes="partial"
                        checked={self.state.basicChecked} 
                        onChange={function (e) {
                            self.setState({
                                basicChecked: e.target.checked
                            })
                        }} />
                    <span>checkbox</span>
                </label>
                <hr/>
                <label>
                    <Checkbox
                        themes="partial" 
                        checked={self.state.basicFalseChecked} 
                        onChange={function (e) {
                            self.setState({
                                basicFalseChecked: e.target.checked
                            })
                        }} />
                    <span>checkbox</span>
                </label>
                <hr/>
                <label>
                    <Checkbox
                        themes="partial" 
                        checked={self.state.disabledChecked} 
                        disabled={true} 
                        onChange={function (e) {
                            self.setState({
                                disabledChecked: e.target.checked
                            })
                        }} />
                    <span>disabled | checked:true</span>
                </label>
                <hr/>
                <label>
                    <Checkbox
                        themes="partial" 
                        checked={self.state.disabledFalseChecked} 
                        disabled={true} 
                        onChange={function (e) {
                            self.setState({
                                disabledChecked: e.target.checked
                            })
                        }} />
                    <span>disabled | checked: false</span>
                </label>
            </div>
        )
    }
}
/*ONFACE-DEL*/Partial = require("react-hot-loader").hot(module)(Partial)
module.exports = Partial
