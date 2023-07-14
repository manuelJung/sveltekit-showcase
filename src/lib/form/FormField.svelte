<script lang="ts">
  import { getComponent, loadComponent } from "./cache";


  export let row:{
    comp: string,
    compProps: Record<string, unknown>
  }

  let Component = getComponent(row.comp)

  $: if(!Component) {
    loadComponent(row.comp).then(C => Component=C)
  }
</script>

{#if Component}
  <svelte:component this={Component} {...row.compProps}/>
{:else}
  <p>loading...</p>
{/if}