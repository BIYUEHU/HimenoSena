import { customElement } from 'lit/decorators.js'
import { SenaComponent } from './Components/SenaComponent.ts'
import SenaState from './data/state.ts'
import { SenaError, showCatchedError } from './utils/error.ts'
import { eventsLooper } from './utils/eventsEmiter.ts'

function main() {
  /* Register custom elements */
  customElement('sena-component')(SenaComponent)

  /* Start events loop */
  eventsLooper()

  /* Set active counter */
  SenaState.setActiveCounter()
}

export function bootstrap(key: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (key.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0) !== 252929) {
      reject(new SenaError('Invalid key'))
      return
    }
    try {
      main()
      resolve(void 0)
    } catch (err) {
      reject(new SenaError(`Failed to initialize app: ${showCatchedError(err)}`))
    }
  })
}
