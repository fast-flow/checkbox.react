import { Component } from "react"
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
        
        return (
            <span ref="root" className={cls({
                    [`${rootClassName}`]: true,
                    [`${pcls}--checked`]: self.props.checked,
                    [`${pcls}--disabled`]: self.props.disabled,
                    [`${pcls}--focus`]: self.state.focus,
                })} >
                <span className={`${pcls}-mark`}></span>
                <input
                    name={self.props.name}
                    checked={self.props.checked}
                    type={self.props.type}
                    disabled={self.props.disabled}
                    onChange={self.props.onChange}
                    className={`${pcls}-input`}
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
