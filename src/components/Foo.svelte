<script lang="ts">
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";


  console.log('setup')

  let show = false

  $: console.log(show, '$') // on beforeBeforeUpdate

  beforeUpdate(() => console.log('before update'))
  onMount(() => console.log('mount')) // after first update
  afterUpdate(() => console.log('after update'))
  onDestroy(() => console.log('destroy')) // vorsicht: tritt auch auf server auf

  console.log('end setup')

</script>

<div>
  <div data-info={show ? 'rendered' : 'no-rendered'}>{console.log('inner', show)}</div>
  <button on:click={() => show = true}>click me</button>
  {#if show}
    <div>show secret</div>
  {/if}
</div>
