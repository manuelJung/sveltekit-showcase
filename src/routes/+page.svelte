<script lang="ts">
  import FormField from "../lib/form/FormField.svelte";

  export let data
</script>

{#each data.form as formField}
  <FormField row={formField} />
{/each}