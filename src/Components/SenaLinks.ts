import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import type { Link } from '../types.ts'
import './SenaTextBlock.ts'

@customElement('sena-links')
export class SenaLinks extends LitElement {
  private readonly links: Link[] = [
    {
      name: 'Arimura Romi',
      description: "Character Arimura Romi (有村ロミ) 's webite",
      url: 'https://arimuraromi.com'
    },
    {
      name: 'RomiNest',
      description: "Author's nest...",
      url: 'https://i.arimuraromi.com'
    },
    {
      name: 'Blacklist | 黑名单',
      description: '',
      url: './blacklist.html'
    },
    {
      name: 'About Site | 关于本站',
      description: '',
      url: 'https://biyuehu.github.io/HimenoSena/docs/about'
    },
    {
      name: 'Connect Sena | 联系星奏',
      description: '',
      url: 'mailto://i@himeno-sena.com'
    }
  ]

  public override render() {
    return html`
    <link rel="stylesheet" href="./styles.css">
    <sena-text-block head="Links">
      ${this.links.map(({ name, description, url }) => html`<a href=${url} target="_blank">${name}<i>${description ? ` - ${description}` : ''}</i></a><br />`)}
    </sena-text-block>
    `
  }
}
