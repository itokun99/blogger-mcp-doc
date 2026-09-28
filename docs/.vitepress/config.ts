import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'blogger-mcp',
  description: 'MCP server for the Blogger v3 REST API',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/getting-started' },
      { text: 'Tools', link: '/tools/blogs' },
      { text: 'GitHub', link: 'https://github.com/itokun99/blogger-mcp' }
    ],
    sidebar: {
      '/getting-started': [
        { text: 'Getting Started', items: [
          { text: 'Overview', link: '/' },
          { text: 'Quickstart', link: '/getting-started' },
          { text: 'Configuration', link: '/setup' }
        ]}
      ],
      '/tools/': [
        { text: 'Tools Reference', collapsed: false, items: [
          { text: 'Blogs', link: '/tools/blogs' },
          { text: 'Posts', link: '/tools/posts' },
          { text: 'Pages', link: '/tools/pages' },
          { text: 'Comments', link: '/tools/comments' },
          { text: 'Stats & Users', link: '/tools/stats' }
        ]}
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/itokun99/blogger-mcp' }
    ]
  }
})
