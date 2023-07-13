<script lang="ts">
  import { onMount, onDestroy } from "svelte";


  let unsubscribe = () => null // unsubscribe for server

  onMount(() => {
    unsubscribe = () => null // unsubscribe for client
  })

  onDestroy(() => {
    // vorsicht! wird auch auf server ausgeführt
    if(typeof window !== 'undefined') {
      unsubscribe()
    }
  })

</script>

<div>
</div>
