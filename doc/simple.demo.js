var ReactDOM = require('react-dom')
var React = require('react')
var Checkbox = require('checkbox.react')
class Simple extends React.Component {
    render () {
    	let self = this
        return (
            <div className="simpleDemo" >
            	<Checkbox checked={true} /> checked : true
            	<br/>
            	<Checkbox checked={false} /> checked : false
            	<br/>
            	<Checkbox disabled={true} checked={true} /> disabled : true | checked : true
            	<br/>
            	<Checkbox disabled={true} checked={false} /> disabled : true | checked : false
            </div>
        )
    }
}
/*ONFACE-DEL*/Simple = require("react-hot-loader").hot(module)(Simple)
ReactDOM.render(
    <Simple />,
    document.getElementById('simple-demo')
)
