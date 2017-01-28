import { Component } from "react"
import Checkbox from "../index"
import { shallow, mount, render } from "enzyme"

it('props.prefixClassName', function () {
    var app = mount(<Checkbox prefixClassName="m-check" />)
    expect(app.find('.m-check').length).toEqual(1)
    expect(app.find('.m-check-checkbox').length).toEqual(1)
})
it('props.className', function () {
    var app = mount(<Checkbox className="myclass" />)
    expect(app.find('.myclass').length).toEqual(1)
})
it('props.onChange', function () {
    var checked = false
    var app = mount(<Checkbox checked={checked} onChange={function(e) {
        checked = e.target.checked
    }} />)
    app.find('.r-checkbox-checkbox').simulate('change', {target:{checked: true}})
    expect(checked).toEqual(true)
    app.find('.r-checkbox-checkbox').simulate('change', {target:{checked: false}})
    expect(checked).toEqual(false)
})
it('props.checked', function () {
    var app = mount(<Checkbox checked={true} />)
    expect(app.find('.r-checkbox').hasClass('r-checkbox--checked')).toEqual(true)
    expect(app.find('.r-checkbox-checkbox').prop('checked')).toEqual(true)
    var app = mount(<Checkbox />)
    expect(app.find('.r-checkbox').hasClass('r-checkbox--checked')).toEqual(false)
    expect(app.find('.r-checkbox-checkbox').prop('checked')).toEqual(false)
})
it('props.name', function () {
    var app = mount(<Checkbox name="abc" />)
    expect(app.find('.r-checkbox-checkbox').prop('name')).toEqual('abc')
    var app = mount(<Checkbox  />)
    expect(app.find('.r-checkbox-checkbox').prop('name')).toEqual('')
})

it('props.disabled', function () {
    var app = mount(<Checkbox disabled={true} />)
    expect(app.find('.r-checkbox').hasClass('r-checkbox--disabled')).toEqual(true)
    expect(app.find('.r-checkbox-checkbox').prop('disabled')).toEqual(true)
    var app = mount(<Checkbox />)
    expect(app.find('.r-checkbox').hasClass('r-checkbox--disabled')).toEqual(false)
    expect(app.find('.r-checkbox-checkbox').prop('disabled')).toEqual(false)
})

it('props.type', function () {
    var app = mount(<Checkbox />)
    expect(app.find('.r-checkbox-checkbox').prop('type')).toEqual('checkbox')
    var app = mount(<Checkbox type="radio" />)
    expect(app.find('.r-checkbox-checkbox').prop('type')).toEqual('radio')
})
