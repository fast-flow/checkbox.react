var React = require('react')
var Checkbox = require('checkbox.react')
class Size extends React.Component {
	constructor(props){
		super(props)
		this.state = {
            check: true
		}
	}
    changeCheck = (e) => {
        this.setState({
            check: e.target.checked
        })
    }
    render () {
    	let self = this
        return (
            <div className="sizeDemo" >
                {/* => fontsize: 16px */}
                <div>
                    <Checkbox checked={self.state.check} 
                              onChange={self.changeCheck} 
                    >default</Checkbox>
                </div>
                <hr/>
                <div style={{'fontSize':'32px'}} >
                    <Checkbox checked={self.state.check} 
                              onChange={self.changeCheck} 
                    >large</Checkbox>
                </div>
                <hr/>
                <div style={{'fontSize':'48px'}} >
                    <Checkbox checked={self.state.check} 
                              onChange={self.changeCheck} 
                    >very large</Checkbox>
                </div>
            </div>
        )
    }
}
/*ONFACE-DEL*/Size = require("react-hot-loader").hot(module)(Size)
module.exports = Size
