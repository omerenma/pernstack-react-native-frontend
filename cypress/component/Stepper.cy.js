import {mount} from 'cypress/react'
import Stepper from '../../components/Stepper'

describe('Stepper.cy.js', () => {
  it('mounts', () => {
    // cy.mount()
    mount(<Stepper />)
    
  })
})