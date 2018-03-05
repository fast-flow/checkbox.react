import p from 'prop-types'

export default function (app) {
     app.defaultProps = {
        prefixClassName: 'face-checkbox',
        themes: '',
        onChange: function (event) {},
        checked: false,
        name: '',
        value: '',
        disabled: false,
        // type: radio https://github.com/onface/radio.react
        type: 'checkbox',
        children: null
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string ,
        onChange: p.func,
        checked: p.bool,
        name: p.string,
        value: p.oneOfType([
            p.string,
            p.number
        ]),
        disabled: p.bool,
        type: p.string,
        children: p.oneOfType([
            p.element,
            p.string,
            p.number,
            p.node
        ])
    }
}