<script lang="ts">
  import FormField from "../lib/form/FormField.svelte";

  const data = [
    {
      comp: 'FormInputFlowbite',
      compProps: {
        type: 'text',
        name: 'test',
        label: 'Test',
        required: true,
        placeholder: 'MyPlaceholder',
        helperText: 'Hier kann ein Helper Text stehen',
        svgIcon: true, // erstmal nur ein Standard Icon anzeigen
        id: '7-htgdztfdu'
      }
    },
    {
      comp: 'FormTextAreaFlowbite',
      compProps: {
        name: 'test',
        label: 'Test',
        required: true,
        placeholder: 'MyPlaceholder',
        helperText: 'Hier kann ein Helper Text stehen',
        svgIcon: true, // erstmal nur ein Standard Icon anzeigen
        id: '7-htgdztfdu'
      }
    },
    {
      comp: 'FormTextAreaFlowbite',
      compProps: {
        name: 'test',
        label: 'Test',
        required: true,
        placeholder: 'MyPlaceholder',
        helperText: 'Hier kann ein Helper Text stehen',
        svgIcon: true, // erstmal nur ein Standard Icon anzeigen
        id: '7-htgdztfdu'
      }
    },
  ]
</script>

{#each data as formField}
  <FormField row={formField} />
{/each}