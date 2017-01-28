import { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            prefixClassName: 'r-checkbox',
            className: '',
            onChange: function (event) {},
            checked: false,
            name: '',
            disabled: false,
            // type: radio https://github.com/fast-flow/radio.react
            type: 'checkbox'
        },
        propTypes: {
            prefixClassName: PropTypes.string,
            className: PropTypes.string,
            onChange: PropTypes.func,
            checked: PropTypes.boolean,
            name: PropTypes.string,
            disabled: PropTypes.boolean,
            type: PropTypes.string
        }
    })
}
