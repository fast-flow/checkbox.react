var React = require('react')
var Checkbox = require('checkbox.react').default
var App = React.createClass({
    getInitialState: function () {
        return {
            basicChecked: false,
            disabledChecked: true,
            disabledFalseChecked: false
        }
    },
    render: function () {
        var self = this
        return (
            <div>
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
})
module.exports = App
