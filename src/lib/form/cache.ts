import FormInputFlowbite from './components/FormInputFlowbite.svelte'

/** 
 * Components that should be added to the initial bundle (because it is very
 * small or used everywhere) can be directly imported
 */
const components:Record<string,ConstructorOfATypedSvelteComponent> = {
  FormInputFlowbite: FormInputFlowbite
}

/**
 * temp cache to share promises
 */
const fetchCache:Record<string, Promise<ConstructorOfATypedSvelteComponent>> = {}

export function getComponent (name:string):ConstructorOfATypedSvelteComponent|null {
  return components[name] ?? null
}

export function loadComponent (name:string):Promise<ConstructorOfATypedSvelteComponent> {
  /** when we already have a component in cache we resolve it */
  if(components[name]) return Promise.resolve(components[name])
  /** when we load the same component in an parralel request we resolve the exact same promise */
  if(name in fetchCache) return fetchCache[name]

  /** we create a promise which resolves the component, but do not await it yet */
  const promise = import(`./components/${name}.svelte`)
  .then(
    res => res.default,
    () => import('./components/Fallback.svelte').then(res => res.default)
  )
  .then(component => {
    delete fetchCache[name]
    components[name] = component
    return component
  })

  /** 
   * this line is executed BEFORE the promise (sync). we add the promise to our cache. 
   * that way all subsequent calls can resolve the same promise 
   */
  fetchCache[name] = promise

  /**
   * now we "execute" the promise so the calling-function can await it
   */
  return promise
}