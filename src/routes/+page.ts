import { preloadForm } from '$lib/form/cache.js'


export async function load (args) {
  await preloadForm(args.data.form)
  return args.data
}