import { customElement } from 'lit/decorators'
import { SenaComponent } from './Components/SenaComponent.ts'
import { SenaState } from './data/state.ts'
import { SenaError } from './utils/error.ts'
import { eventsLooper } from './utils/eventsEmiter.ts'
import './Components/SenaComponent.ts'

function main() {
  /* Register custom elements */
  customElement('sena-component')(SenaComponent)

  /* Start events loop */
  eventsLooper()

  /* Set active counter */
  SenaState.setActiveCounter()

  /* Fetch data */
  SenaState.setMessagesList()
}

export function bootstrap(key: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (key.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0) !== 252929) {
      reject(new SenaError('Invalid key'))
      return
    }
    try {
      main()
      resolve(undefined)
    } catch (e) {
      reject(new SenaError('Failed to initialize app', e))
    }
  })
}
