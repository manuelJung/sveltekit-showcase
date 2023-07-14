<script lang="ts">
  export let type:'text' = 'text'
  export let name:string
  export let label:string
</script>

<h4>{label}</h4>
<input {type} {name}/>