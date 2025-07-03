import type { CollectionConfig } from 'payload'
import { tagsArrayField } from '../fields/tagsArrayField'

export const Teams: CollectionConfig = {
  slug: 'teams',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Podstawowe Dane',
          fields: [
            {
              name: 'name',
              label: 'Nazwa',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              label: 'Opis',
              type: 'text',
              required: true,
            },
            {
              name: 'photo',
              label: 'Zdjęcie',
              type: 'relationship',
              relationTo: 'media',
            },
            {
              name: 'coordinates',
              label: 'Lokalizacja na mapie',
              type: 'point',
              required: true,
            },
            tagsArrayField,
          ],
        },
        {
          label: 'Kontakt',
          fields: [
            {
              name: 'contactName',
              label: 'Osoba do kontaktu',
              type: 'text',
              required: true,
            },
            {
              name: 'contactPhone',
              label: 'Telefon',
              type: 'text',
              required: true,
            },
            {
              name: 'contactEmail',
              label: 'Email',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
