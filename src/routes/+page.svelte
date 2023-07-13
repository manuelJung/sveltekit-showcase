<script lang="ts">
  import Inner from "../components/Inner.svelte";

  
  let list = [
    { name: '1', show: true, },
    { name: '2', show: true, },
    { name: '3', show: false, },
    { name: '4', show: true, },
  ]

  const hover = (el:HTMLElement, options:{foo:'bar'}) => {
    el.addEventListener('mouseenter', () => {
      el.style.color = 'steelblue'
    })
    el.addEventListener('mouseleave', () => {
      el.style.color = ''
    })
    // return {
    //   destroy() {
    //     el.removeEventListener('focus', listener)
    //   }
    // }
  }

  // const aList = Array(14).fill('').map((_,i) => 'index-'+i)

</script>

{#each list as item, i}
  {@const label = item.name + '-' + item.show}
  <p use:hover={{foo:'bar'}}>{label} {i}</p>
{/each}

<!-- {@debug list} -->
  
<Inner>
  <p slot="slot-1">slot content</p>
</Inner>