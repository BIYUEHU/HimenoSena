export function safe(fn: () => unknown) {
  try {
    fn()
  } catch {
    // ignore
  }
}

export function copyFile(dir: string, target: string, filter?: (name: string) => boolean) {
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
