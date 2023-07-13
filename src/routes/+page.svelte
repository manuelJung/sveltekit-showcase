<script lang="ts">
  import Foo from "../components/Foo.svelte";

  let show = true

  console.log('parent')

</script>

<button on:click={() => show=!show}>toggle Foo</button>

<div>
  {#if show}
    <Foo/>
  {/if}
  <!-- <Foo/> -->
</div>
