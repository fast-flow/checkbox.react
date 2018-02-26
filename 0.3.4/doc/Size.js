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
                <label>
                    <Checkbox checked={self.state.check} 
                              onChange={self.changeCheck} 
                    />
                    <span>default</span>
                </label>
                <hr/>
                <label style={{'fontSize':'8px'}} >
                    <Checkbox checked={self.state.check} 
                              onChange={self.changeCheck} 
                    />
                    <span>small</span>
                </label>
                <hr/>
                <label style={{'fontSize':'32px'}} >
                    <Checkbox checked={self.state.check} 
                              onChange={self.changeCheck} 
                    />
                    <span>large</span>
                </label>
            </div>
        )
    }
}
/*ONFACE-DEL*/Size = require("react-hot-loader").hot(module)(Size)
module.exports = Size
