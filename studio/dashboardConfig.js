export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ef0adf5c4db5bab5faeb5c7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-at3xvp1j',
                  apiId: '549a1d9b-9aaf-483c-9f8c-9724ef12092f'
                },
                {
                  buildHookId: '5ef0adf6fc94645500d3988b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g8wbq2y9',
                  apiId: 'b3c3fae3-259c-4465-bded-09e5e6e5d8b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mornir/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g8wbq2y9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
