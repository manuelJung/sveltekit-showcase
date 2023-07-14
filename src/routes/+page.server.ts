

export function load (args) {
  return {
    form: [
      {
        comp: 'FormInputFlowbite',
        preload: true,
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
        preload: true,
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
        preload: true,
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
  }
}