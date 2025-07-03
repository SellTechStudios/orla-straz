import { Field } from 'payload'

export const tagsArrayField: Field = {
  name: 'tags',
  label: 'Tagi',
  type: 'array',
  fields: [
    {
      name: 'tag',
      type: 'text',
    },
  ],
  admin: {
    components: {
      Field: '/payload/fields/tagsArray/tagsArrayComponent',
    },
  },
}
