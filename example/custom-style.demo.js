var React = require('react')
var Checkbox = require('checkbox.react').default
var App = React.createClass({
    render: function () {
        return (
            <div>
                <Checkbox className="m-checkbox--s" /> m-checkbox--s
                <br/>
                <Checkbox className="m-checkbox--s" checked="true" /> m-checkbox--s checked
                <hr/>
                <Checkbox className="m-checkbox--m" /> m-checkbox--m
                <br/>
                <Checkbox className="m-checkbox--m" checked="true" /> m-checkbox--m checked
                <hr/>
                <Checkbox className="m-checkbox--l" /> m-checkbox--l
                <br/>
                <Checkbox className="m-checkbox--l" checked="true" /> m-checkbox--l checked
            </div>
        )
    }
})
module.exports = App
