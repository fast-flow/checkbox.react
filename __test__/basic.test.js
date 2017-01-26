import { Component } from "react"
import Checkbox from "../index"
import { shallow, mount, render } from "enzyme"

class App extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <Checkbox className="myclass" />
        )
    }
}
it('className', function () {
    const app = mount(<App/>)
    expect(app.find('.myclass').length).toEqual(1)
})
