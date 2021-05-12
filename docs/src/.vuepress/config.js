const { description } = require('../../package')

module.exports = {
  title: 'AR with Unity',
  description: description,
  base: '/ar-with-unity-workshop/',
  themeConfig: {
    repo: 'lakermann/ar-with-unity-workshop',
    docsDir: '',
    sidebar: {
      '/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '/',
            'unity',
            'vuforia',
            'scene',
            'scripts',
            'build-app'
          ]
        }
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top'
  ],
}
