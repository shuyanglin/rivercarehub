import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'rivers',
  title: 'rivers',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'boolean'
    }),
    defineField({
      name: 'prompts',
      title: 'Prompts',
      type: 'array',
      of: [{type: 'string'}]
    }),
  ],
})
