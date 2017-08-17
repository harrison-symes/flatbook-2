import React from 'react'
import test from 'ava'
import {shallow, mount} from 'enzyme'

import '../setup-dom'
import ShoppingListAdd from '../../../client/components/ShoppingListAdd'

test('test', (t) => {
  const wrapper = mount(<ShoppingListAdd match={{params: {flat_id: 1}}} />)
  t.is(wrapper.state().newItem.item, "")
})

test('test', (t) => {
  const wrapper = shallow(<ShoppingListAdd match={{params: {flat_id: 1}}}/>)
  const event = {target: {name: 'item', value: 'word'}}
  wrapper.find('input[name="item"]').simulate('change', event)
  t.is(wrapper.state().newItem.item, 'word')
})