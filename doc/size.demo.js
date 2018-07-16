var ReactDOM = require('react-dom')
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
                    />default
                </label>
                <hr/>
                <div style={{'fontSize':'32px'}} >
                    <label>
                        <Checkbox checked={self.state.check} 
                                  onChange={self.changeCheck} 
                        />large
                    </label>
                </div>
                <hr/>
                <div style={{'fontSize':'48px'}} >
                    <label>
                        <Checkbox checked={self.state.check} 
                                  onChange={self.changeCheck} 
                        />very large
                    </label>
                </div>
            </div>
        )
    }
}
/*ONFACE-DEL*/Size = require("react-hot-loader").hot(module)(Size)

ReactDOM.render(
    <Size />,
    document.getElementById('size-demo')
)
