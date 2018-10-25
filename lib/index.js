import React, { Component } from "react"
import extend from "extend"
import util from "util.react"
import cls from "classnames";
import spreadProps from "react-spread-props";
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
        this.setState({
            focus:true
        })
    }
    onBlur = () => {
        this.setState({
            focus:false
        })
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        var rootClassName = [
            pcls,
            util.themes(self.props),
        ].join(' ')

        let domProps = spreadProps(self.props, {
            className: rootClassName + cls({
                [`${rootClassName}`]: true,
                [`${pcls}--checked`]: self.props.checked,
                [`${pcls}--disabled`]: self.props.disabled,
                [`${pcls}--focus`]: self.state.focus,
            })
        })
        
        let beforeType = typeof self.props.before
        
        return (
            <label 
                ref={(node) => self.refRoot = node }
                {...domProps}
            >
                {
                    self.props.before === true
                    ? (<span className={`${pcls}-label`}>{self.props.children}</span>)
                    : 
                        beforeType === 'string' || beforeType === 'object'
                        ? (<span className={`${pcls}-label`}>{self.props.before}</span>)
                        : null
                }
                <span className={`${pcls}-switch`}>
                    <span className={`${pcls}-switch-icon`}></span>
                    <input
                        name={self.props.name}
                        value={self.props.value}
                        checked={self.props.checked}
                        type={self.props.type}
                        disabled={self.props.disabled}
                        onChange={self.props.onChange}
                        className={`${pcls}-switch-input`}
                        onFocus={self.onFocus}
                        onBlur={self.onBlur}
                    />
                </span>
                {
                    beforeType && self.props.before === true
                    ? null 
                    : (<span className={`${pcls}-label`}>{self.props.children}</span>)
                }
            </label>
        )
    }
}
require('./props').default(Checkbox)
export default Checkbox
module.exports= Checkbox
