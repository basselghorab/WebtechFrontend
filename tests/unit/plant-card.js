import { mount } from '@vue/test-utils'
import PlantCard from '@/components/PlantCard'

// eslint-disable-next-line no-undef
describe('Testing PlantCard.vue', () => {
  // eslint-disable-next-line no-undef
  it('should render plant name and description', () => {
    // when
    const wrapper = mount(PlantCard, {
      propsData: {
        plant: {
          id: 1,
          name: 'Rose',
          description: 'Beautiful flower',
          wateringIntervalDays: 7
        }
      }
    })
    // then
    const cardTitle = wrapper.find('.card-title')
    // eslint-disable-next-line no-undef
    expect(cardTitle.text()).toBe('Rose')

    const cardDescription = wrapper.find('.card-text')
    // eslint-disable-next-line no-undef
    expect(cardDescription.text()).toContain('Beautiful flower')
  })

  // eslint-disable-next-line no-undef
  it.each`
    wateringIntervalDays | expected
    ${7}                | ${'7 Days'}
    ${10}               | ${'10 Days'}
  `('should render watering interval ($wateringIntervalDays Days)', ({ wateringIntervalDays, expected }) => {
    // when
    const testPlant = {
      id: 1,
      name: 'Rose',
      description: 'Beautiful flower',
      wateringIntervalDays: wateringIntervalDays
    }
    const wrapper = mount(PlantCard, {
      propsData: {
        plant: testPlant
      }
    })

    // then
    const cardDescription = wrapper.find('.card-text')
    // eslint-disable-next-line no-undef
    expect(cardDescription.text()).toContain(`has a watering interval of ${expected}`)
  })

  // eslint-disable-next-line no-undef
  it('should emit navigateToPlantDetails event when "more details" button is clicked', () => {
    // given
    const testPlant = {
      id: 1,
      name: 'Rose',
      description: 'Beautiful flower',
      wateringIntervalDays: 7
    }
    const wrapper = mount(PlantCard, {
      propsData: {
        plant: testPlant
      }
    })

    // when
    wrapper.find('.btn-primary').trigger('click')

    // then
    // eslint-disable-next-line no-undef
    expect(wrapper.emitted('navigateToPlantDetails')).toBeTruthy()
  })
})
