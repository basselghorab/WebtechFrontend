/* global describe, it, expect */
import { mount } from '@vue/test-utils'
import Plants from '@/views/Plants.vue'
import PlantsCardList from '@/components/PlantsCardList.vue'
import PlantsCreateFrom from '@/components/PlantsCreateFrom.vue'

describe('Testing Plants.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Plants)

    // then
    expect(wrapper.text()).toMatch('Plants')
  })

  it('should have plant card list component', () => {
    // when
    const wrapper = mount(Plants)

    // then
    const cardList = wrapper.findComponent(PlantsCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have persons create form component', () => {
    // when
    const wrapper = mount(Plants)

    // then
    const createForm = wrapper.findComponent(PlantsCreateFrom)
    expect(createForm.exists()).toBeTruthy()
  })
})
