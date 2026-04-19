import { render } from '@lit-labs/ssr'
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { SenaComponent } from './src/Components/SenaComponent.ts'

const [PUBLIC_DIR, PHP_DIR, DEST_DIR] = /* Deno.args */ ['public', 'php', 'build']

if (!PUBLIC_DIR || !DEST_DIR) {
  console.error('Usage: build.ts <public_dir> <dest_dir>')
  Deno.exit(1)
}

function safe(fn: () => unknown) {
  try {
    fn()
  } catch {
    // ignore
  }
}

function copyFile(dir: string, target: string, filter?: (name: string) => boolean) {
  safe(() => Deno.mkdirSync(dir, { recursive: true }))
  safe(() => Deno.mkdirSync(target, { recursive: true }))

  for (const file of Deno.readDirSync(dir)) {
    if (file.isFile) {
      if (filter && !filter(file.name)) continue
      const source = `${dir}/${file.name}`
      const dest = `${target}/${file.name}`
      Deno.copyFileSync(source, dest)
      console.log(`Copied ${source} to ${dest}`)
    } else if (file.isDirectory) {
      copyFile(`${dir}/${file.name}`, `${target}/${file.name}`)
    }
  }
}

safe(() => Deno.removeSync(DEST_DIR, { recursive: true }))
safe(() => Deno.mkdirSync(DEST_DIR, { recursive: true }))

copyFile(PUBLIC_DIR, DEST_DIR)
copyFile(PHP_DIR, DEST_DIR, (name) => name.endsWith('.php'))

await new Deno.Command(Deno.execPath(), {
  args: ['bundle', '--platform', 'browser', '--minify', '--output', `${DEST_DIR}/bundle.js`, 'src/main.ts']
})
  .spawn()
  .output()

const time = new Date().toLocaleString()
const jsAndCssComment = /* js */ `/**
 * @project https://github.com/biyuehu/HimenoSena
 * @license SENA WITH GPL-3.0
 * @build ${time}
 */`

customElement('sena-component')(SenaComponent)

const indexHtml = /* html */ `<!-- Project: https://github.com/biyuehu/HimenoSena -->
<!-- Build time: ${time} -->
${Deno.readTextFileSync(`${PUBLIC_DIR}/index.html`).replace(
  '<sena-component></sena-component>',
  collectResultSync(render(html`<sena-component></sena-component>`))
)}`

Deno.writeTextFileSync(`${DEST_DIR}/index.html`, indexHtml)
// Deno.removeSync(`${DEST_DIR}/index.html`)

const indexPhp = Deno.readTextFileSync(`${DEST_DIR}/index.php`)
Deno.writeTextFileSync(`${DEST_DIR}/index.php`, `${indexPhp}\n${indexHtml}`)

const bundleJs = Deno.readTextFileSync(`${DEST_DIR}/bundle.js`)
Deno.writeTextFileSync(`${DEST_DIR}/bundle.js`, `${jsAndCssComment}\n\n${bundleJs}`)
const stylesCss = Deno.readTextFileSync(`${DEST_DIR}/styles.css`)
Deno.writeTextFileSync(`${DEST_DIR}/styles.css`, `${jsAndCssComment}\n\n${stylesCss}`)

console.log('Build complete.')
