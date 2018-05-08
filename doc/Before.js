var React = require('react')
var Checkbox = require('checkbox.react')
class Before extends React.Component {
	constructor(props){
		super(props)
	}
    render () {
    	let self = this
        return (
            <div className="beforeDemo" >
                <Checkbox checked={true} >has't before</Checkbox>
                <hr/>
                <Checkbox checked={true} before >true</Checkbox> <br/>
                <Checkbox checked={true} before disabled={true} >true</Checkbox>
                <hr/>
                <Checkbox checked={true} before={'beforeLabel'} >string</Checkbox> <br/>
                <Checkbox checked={true} before={'beforeLabel'} disabled={true} >string</Checkbox>  <br/>
                <Checkbox checked={true} before={'beforeLabel'} /> <br/>
                <Checkbox checked={true} before={'beforeLabel'} disabled={true} />
                <hr/>
                <Checkbox checked={true} before={(<i>before react ele</i>)} >reactDomEle</Checkbox> <br/>
                <Checkbox checked={true} before={(<i>before react ele</i>)} disabled={true} >reactDomEle</Checkbox> <br/>
                <Checkbox checked={true} before={(<i>before react ele</i>)} /> <br/>
                <Checkbox checked={true} before={(<i>before react ele</i>)} disabled={true} />
                <hr/>
            </div>
        )
    }
}
/*ONFACE-DEL*/Before = require("react-hot-loader").hot(module)(Before)
module.exports = Before
