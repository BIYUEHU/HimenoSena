import { render } from '@lit-labs/ssr'
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { SenaComponent } from './src/Components/SenaComponent.ts'

customElement('sena-component')(SenaComponent)

const result = collectResultSync(
  render(html`
  <sena-component></sena-component>
`)
)

const template = `<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>你的页面</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  ${result}
  <script type="module" src="./dist/bundle.js"></script>
</body>
</html>`

Deno.mkdirSync('./dist', { recursive: true })
Deno.writeTextFileSync('./dist/index.html', template)
console.log('Pre-rendered index.html')
