module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue CLI',
      description: '🛠️ Standard Tooling for Vue.js Development'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vue CLI',
      description: '🛠️ Vue.js 开发的标准工具'
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        '/': {
          message: "New content is available.",
          buttonText: "Refresh"
        },
        '/zh/': {
          message: "发现新内容可用",
          buttonText: "刷新"
        },
      }
    }
  },
  theme: '@vuepress/theme-vue',
  themeConfig: {
    repo: 'vuejs/vue-cli',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    sidebarDepth: 3,
    algolia: {
      indexName: 'cli_vuejs',
      apiKey: 'f6df220f7d246aff64a56300b7f19f21',
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Config Reference',
            link: '/config/'
          },
          {
            text: 'Plugins',
            items: [
              {
                text: 'Configuration',
                items:
                [
                  { text: 'Core', link: '/core-plugins/' },
                ]
              },
              {
                text: 'Discover',
                items:
                [
                  { text: 'Browse', link: 'https://awesomejs.dev/for/vue-cli/' }
                ]
              },
              {
                text: 'Development',
                items:
                [
                  { text: 'Guide', link: '/dev-guide/plugin-dev.md' },
                ]
              },
              {
                text: 'API',
                items:
                [
                  { text: 'Plugin', link: '/dev-guide/plugin-api.md' },
                  { text: 'Generator', link: '/dev-guide/generator-api.md' },
                ]
              },
              {
                text: 'UI',
                items:
                [
                  { text: 'Info', link: '/dev-guide/ui-info.md' },
                  { text: 'API', link: '/dev-guide/ui-api.md' },
                  { text: 'Localization', link: '/dev-guide/ui-localization.md' }
                ]
              },
            ]
          },
          {
            text: 'Migrating From v3',
            link: '/migrating-from-v3/'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vue-cli/blob/dev/CHANGELOG.md'
          }
        ],
        sidebar: {
          '/guide/': [
            '/guide/',
            '/guide/installation',
            {
              title: 'Basics',
              collapsable: false,
              children: [
                '/guide/prototyping',
                '/guide/creating-a-project',
                '/guide/plugins-and-presets',
                '/guide/cli-service'
              ]
            },
            {
              title: 'Development',
              collapsable: false,
              children: [
                '/guide/browser-compatibility',
                '/guide/html-and-static-assets',
                '/guide/css',
                '/guide/webpack',
                '/guide/mode-and-env',
                '/guide/build-targets',
                '/guide/deployment',
                '/guide/troubleshooting'
              ]
            }
          ],
          '/dev-guide/': [
            '/dev-guide/plugin-dev.md',
            {
              title: 'API reference',
              collapsable: false,
              children: [
                '/dev-guide/plugin-api.md',
                '/dev-guide/generator-api.md',
              ]
            },
            {
              title: 'UI Development',
              collapsable: false,
              children: [
                '/dev-guide/ui-info.md',
                '/dev-guide/ui-api.md',
                '/dev-guide/ui-localization.md'
              ]
            }
          ],
          '/core-plugins/': [{
            title: 'Core Vue CLI Plugins',
            collapsable: false,
            children: [
              '/core-plugins/babel.md',
              '/core-plugins/typescript.md',
              '/core-plugins/eslint.md',
              '/core-plugins/pwa.md',
              '/core-plugins/unit-jest.md',
              '/core-plugins/unit-mocha.md',
              '/core-plugins/e2e-cypress.md',
              '/core-plugins/e2e-nightwatch.md',
              '/core-plugins/e2e-webdriverio.md'
            ]
          }],

        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次编辑时间',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '配置参考',
            link: '/zh/config/'
          },
          {
            text: '插件开发指南',
            items: [
              { text: '插件开发指南', link: '/zh/dev-guide/plugin-dev.md' },
              { text: 'UI 插件信息', link: '/zh/dev-guide/ui-info.md' },
              { text: 'UI 插件 API', link: '/zh/dev-guide/ui-api.md' },
              { text: 'UI 本地化', link: '/zh/dev-guide/ui-localization.md' }
            ]
          },
          {
            text: '插件',
            items: [
              { text: 'Babel', link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-babel/README.md' },
              { text: 'TypeScript', link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-typescript/README.md' },
              { text: 'ESLint', link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-eslint/README.md' },
              { text: 'PWA', link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md' },
              { text: 'Jest', link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-unit-jest/README.md' },
              { text: 'Mocha', link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-unit-mocha/README.md' },
              { text: 'Cypress', link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-e2e-cypress/README.md' },
              { text: 'Nightwatch', link: 'https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-e2e-nightwatch/README.md' }
            ]
          },
          {
            text: '更新记录',
            link: 'https://github.com/vuejs/vue-cli/blob/dev/CHANGELOG.md'
          }
        ],
        sidebar: {
          '/zh/guide/': [
            '/zh/guide/',
            '/zh/guide/installation',
            {
              title: '基础',
              collapsable: false,
              children: [
                '/zh/guide/prototyping',
                '/zh/guide/creating-a-project',
                '/zh/guide/plugins-and-presets',
                '/zh/guide/cli-service'
              ]
            },
            {
              title: '开发',
              collapsable: false,
              children: [
                '/zh/guide/browser-compatibility',
                '/zh/guide/html-and-static-assets',
                '/zh/guide/css',
                '/zh/guide/webpack',
                '/zh/guide/mode-and-env',
                '/zh/guide/build-targets',
                '/zh/guide/deployment'
              ]
            }
          ],
          '/zh/dev-guide/': [
            '/zh/dev-guide/plugin-dev.md',
            {
              title: 'UI 开发',
              collapsable: false,
              children: [
                '/zh/dev-guide/ui-info.md',
                '/zh/dev-guide/ui-api.md',
                '/zh/dev-guide/ui-localization.md'
              ]
            }
          ]
        }
      },
    }
  }
}
