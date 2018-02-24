import { Component } from "react"
import extend from "extend"
import util from "util.react"
import cls from "classnames"
require('./index.less')
class Checkbox extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {}
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
                    [`${pcls}`]: true,
                    [`${self.props.className}`]: self.props.className,
                    [`${pcls}--checked`]: self.props.checked,
                    [`${pcls}--disabled`]: self.props.disabled
                })} >
                <span className={`${pcls}-mark`}></span>
                <input
                    name={self.props.name}
                    checked={self.props.checked}
                    type={self.props.type}
                    disabled={self.props.disabled}
                    onChange={self.props.onChange}
                    className={`${pcls}-input`}
                />
            </span>
        )
    }
}
require('./props').default(Checkbox)
export default Checkbox
module.exports= Checkbox
