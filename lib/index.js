import "./index.css"
import { Component } from "react"
import props from "./props"
import classNames from "classnames"
class Checkbox extends Component {
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <span ref="root" className={classNames({
                    [`${pcls}`]: true,
                    [`${self.props.className}`]: self.props.className,
                    [`${pcls}--checked`]: self.props.checked,
                    [`${pcls}--disabled`]: self.props.disabled
                })} >
                <span className={`${pcls}-mark`}></span>
                <input name={self.props.name} checked={self.props.checked} type={self.props.type} disabled={self.props.disabled} onChange={self.props.onChange} className={`${pcls}-input`} />
            </span>
        )
    }
}
props(Checkbox)
export default Checkbox
