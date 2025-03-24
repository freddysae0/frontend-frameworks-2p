import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ShrekComponent from '../../src/views/HomeView.vue' // Ajusta la ruta según tu estructura
import shrekAdjetives from '../../src/assets/shrek_adjetives.json'

describe('ShrekComponent', () => {
  it('changes adjective when button is clicked', async () => {
    const wrapper = mount(ShrekComponent)

    const button = wrapper.find('button')
    const initialAdjective = wrapper.find('h1 span').text()

    await button.trigger('click')

    const newAdjective = wrapper.find('h1 span').text()
    expect(newAdjective).not.toBe(initialAdjective)
    expect(shrekAdjetives.includes(newAdjective)).toBe(true)
  })
})
