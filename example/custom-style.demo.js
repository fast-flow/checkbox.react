var React = require('react')
var Checkbox = require('checkbox.react').default
var App = React.createClass({
    render: function () {
        return (
            <div>
                <label>
                    <Checkbox className="m-checkbox--s" /> m-checkbox--s
                </label>
                <br/>
                <label>
                    <Checkbox className="m-checkbox--s" checked="true" /> m-checkbox--s checked
                </label>
                <br/>
                <label>
                    <Checkbox className="m-checkbox--s" disabled={true} checked="true" /> m-checkbox--s checked disabled
                </label>

                <hr/>
                <label>
                    <Checkbox className="m-checkbox--m" /> m-checkbox--m
                </label>
                <br/>
                <label>
                    <Checkbox className="m-checkbox--m" checked="true" /> m-checkbox--m checked
                </label>
                <br/>
                <label>
                    <Checkbox className="m-checkbox--m" disabled={true} checked="true" /> m-checkbox--m checked disabled
                </label>
                <hr/>
                <label>
                    <Checkbox className="m-checkbox--l" /> m-checkbox--l
                </label>
                <br/>
                <label>
                    <Checkbox className="m-checkbox--l" checked="true" /> m-checkbox--l checked
                </label>
                <br/>
                <label>
                    <Checkbox className="m-checkbox--l" disabled={true} checked="true" /> m-checkbox--l checked disabled
                </label>
            </div>
        )
    }
})
module.exports = App
