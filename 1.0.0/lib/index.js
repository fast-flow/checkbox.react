import React, { Component } from "react"
import extend from "extend"
import util from "util.react"
import cls from "classnames";
require('./index.css');
class Checkbox extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {
            focus:false
        }
    }
    onFocus = () => {
        let self = this
        self.setState({
            focus:true
        })
        if(self.props.onFocus){
            self.props.onFocus()
        }
    }
    onBlur = () => {
        let self = this
        self.setState({
            focus:false
        })
        if(self.props.onBlur){
            self.props.onBlur()
        }
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        var rootClassName = [
            pcls,
            util.themes(self.props),
        ].join(' ')
        
        return (
            <span 
                ref={(node) => self.refRoot = node }
                className={cls({
                    [`${rootClassName}`]: true,
                    [`${pcls}--checked`]: self.props.checked,
                    [`${pcls}--disabled`]: self.props.disabled,
                    [`${pcls}--focus`]: self.state.focus,
                })} 
            >
                <span className={`${pcls}-icon`}></span>
                <input 
                    type={self.props.type} 
                    className={`${pcls}-input`} 
                    name={self.props.name}
                    value={self.props.value}
                    checked={self.props.checked}
                    disabled={self.props.disabled}
                    onChange={self.props.onChange}
                    onFocus={self.onFocus}
                    onBlur={self.onBlur}
                />
            </span>
        )
    }
}
require('./props').default(Checkbox)
export default Checkbox
module.exports= Checkbox
