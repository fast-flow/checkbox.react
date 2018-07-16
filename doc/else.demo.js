var ReactDOM = require('react-dom')
var React = require('react')
var Checkbox = require('checkbox.react')
class Else extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            partialChecked: true,
            partialFalseChecked: false,
            existChecked: true,
            existFalseChecked: false,
        }
    }
    render () {
        let self = this
        return (
            <div className="basicDemo" >
                <h3>themes-partial</h3>
                <label>
                    <Checkbox 
                        themes="partial"
                        checked={self.state.partialChecked} 
                        onChange={function (e) {
                            self.setState({
                                partialChecked: e.target.checked
                            })
                        }} 
                    />partial | checked:{String(self.state.partialChecked)}
                </label>
                <hr/>
                <label>
                    <Checkbox
                        themes="partial" 
                        checked={self.state.partialFalseChecked} 
                        onChange={function (e) {
                            self.setState({
                                partialFalseChecked: e.target.checked
                            })
                        }} 
                    />partial | checked:{String(self.state.partialFalseChecked)}
                </label>
                <hr/>
                <label>
                    <Checkbox themes="partial" checked={true} disabled={true} />
                    disabled | checked:true
                </label>
                <hr/>
                <label>
                    <Checkbox themes="partial" checked={false} disabled={true} />
                    disabled | checked: false
                </label>
                <br/>
                <br/>
                <br/>
                <h3>themes-exist</h3>
                <label>
                    <Checkbox 
                        themes="exist"
                        checked={self.state.existChecked} 
                        onChange={function (e) {
                            self.setState({
                                existChecked: e.target.checked
                            })
                        }} 
                    />exist | checked:{String(self.state.existChecked)}
                </label>
                <hr/>
                <label>
                    <Checkbox
                        themes="exist" 
                        checked={self.state.existFalseChecked} 
                        onChange={function (e) {
                            self.setState({
                                existFalseChecked: e.target.checked
                            })
                        }} 
                    />exist | checked:{String(self.state.existFalseChecked)}
                </label>
                <hr/>
                <label>
                    <Checkbox themes="exist" checked={true} disabled={true} />
                    disabled | checked:true
                </label>
                <hr/>
                <label>
                    <Checkbox themes="exist" checked={false} disabled={true} />
                    disabled | checked: false
                </label>
            </div>
        )
    }
}
/*ONFACE-DEL*/Else = require("react-hot-loader").hot(module)(Else)
ReactDOM.render(
    <Else />,
    document.getElementById('else-demo')
)
