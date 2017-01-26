var React = require('react')
var Checkbox = require('checkbox.react').default
var App = React.createClass({
    render: function () {
        return (
            <div>
                <Checkbox className="m-checkbox--s" /> m-checkbox--s
                <br/>
                <Checkbox className="m-checkbox--s" checked="true" /> m-checkbox--s checked
                <br/>
                <Checkbox className="m-checkbox--s" disabled={true} checked="true" /> m-checkbox--s checked disabled

                <hr/>
                <Checkbox className="m-checkbox--m" /> m-checkbox--m
                <br/>
                <Checkbox className="m-checkbox--m" checked="true" /> m-checkbox--m checked
                <br/>
                <Checkbox className="m-checkbox--m" disabled={true} checked="true" /> m-checkbox--m checked disabled
                <hr/>
                <Checkbox className="m-checkbox--l" /> m-checkbox--l
                <br/>
                <Checkbox className="m-checkbox--l" checked="true" /> m-checkbox--l checked
                <br/>
                <Checkbox className="m-checkbox--l" disabled={true} checked="true" /> m-checkbox--l checked disabled
            </div>
        )
    }
})
module.exports = App
